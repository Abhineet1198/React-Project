import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletButton() {
  return (
      <div className="flex justify-end p-4 bg-slate-950">
        <ConnectButton />
      </div>
  );
}

