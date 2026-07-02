import { getDefaultConfig, RainbowKitProvider,darkTheme} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {bscTestnet,bsc,sepolia} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: projectId,
  chains: [bscTestnet,bsc,sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

import WalletButton from "./blockchain/WalletButton";
import TokenTransfer from "./blockchain/TokenTransfer";

const queryClient = new QueryClient();
const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" theme={darkTheme()}>
          <WalletButton />
          <TokenTransfer />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
