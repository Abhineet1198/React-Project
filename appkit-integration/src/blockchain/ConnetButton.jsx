import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import {bscTestnet,bsc,sepolia } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

const queryClient = new QueryClient();

const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;

const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "http://localhost:5173",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const networks = [bscTestnet, bsc, sepolia];

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false, // For Vite/React use false
});

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata,
});

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}