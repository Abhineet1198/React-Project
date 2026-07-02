import { useState } from "react";
import {
  useAccount,
  useBalance,
  useReadContract,
  useSendTransaction,
  useWriteContract,
} from "wagmi";

import { parseEther, parseUnits, formatUnits, isAddress } from "viem";

import { TOKENS, ERC20_ABI } from "./contract";

export default function TokenTransfer() {
  const { address, isConnected } = useAccount();

  const { sendTransactionAsync } = useSendTransaction();

  const { writeContractAsync } = useWriteContract();

  const [loading, setLoading] = useState(false);

  const { data: bnbBalance } = useBalance({
    address,
  });

  const { data: usdtBalance } = useReadContract({
    address: TOKENS.USDT.address,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: [address],
  });

  const [form, setForm] = useState({
    token: "USDT",
    recipient: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTransfer = async () => {
    if (!isConnected) {
      alert("Connect Wallet");
      return;
    }

    if (!isAddress(form.recipient)) {
      alert("Invalid Address");
      return;
    }

    if (!form.amount || Number(form.amount) <= 0) {
      alert("Invalid Amount");
      return;
    }

    try {
      setLoading(true);

      const amount = Number(form.amount);

      // Check BNB Balance
      if (form.token === "BNB") {
        const balance = Number(bnbBalance?.formatted ?? 0);

        if (amount > balance) {
          alert("Insufficient BNB Balance");
          return;
        }

        const hash = await sendTransactionAsync({
          to: form.recipient,
          value: parseEther(form.amount),
        });

        alert(`Success\nTx Hash:\n${hash}`);
      }

      // Check USDT Balance
      else {
        const balance = Number(
          formatUnits(usdtBalance ?? 0n, TOKENS.USDT.decimals),
        );

        if (amount > balance) {
          alert("Insufficient USDT Balance");
          return;
        }

        const hash = await writeContractAsync({
          address: TOKENS.USDT.address,
          abi: ERC20_ABI,
          functionName: "transfer",
          args: [form.recipient, parseUnits(form.amount, TOKENS.USDT.decimals)],
        });

        alert(`Success\nTx Hash:\n${hash}`);
      }

      setForm({
        token: "USDT",
        recipient: "",
        amount: "",
      });
    } catch (err) {
      console.error(err);

      alert(err.shortMessage || err.message || "Transaction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Token Transfer
        </h1>

        <div className="space-y-5">
          <div>
            <label className="text-gray-300 text-sm block mb-2">
              Select Token
            </label>

            <select
              name="token"
              value={form.token}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
            >
              <option value="BNB">BNB</option>
              <option value="USDT">USDT</option>
            </select>
          </div>

          <div className="text-sm text-gray-400">
            {form.token === "BNB"
              ? `Balance: ${bnbBalance?.formatted ?? 0} BNB`
              : `Balance: ${formatUnits(
                  usdtBalance ?? 0n,
                  TOKENS.USDT.decimals,
                )} USDT`}
          </div>

          <div>
            <label className="text-gray-300 text-sm block mb-2">
              Recipient Address
            </label>

            <input
              type="text"
              name="recipient"
              value={form.recipient}
              onChange={handleChange}
              placeholder="0x..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm block mb-2">Amount</label>

            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="0.00"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
            />
          </div>

          <button
            onClick={handleTransfer}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition
            ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-400 text-black"
            }`}
          >
            {loading ? "Processing..." : `Transfer ${form.token}`}
          </button>
        </div>
      </div>
    </div>
  );
}
