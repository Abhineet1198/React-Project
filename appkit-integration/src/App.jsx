import { AppKitButton } from "@reown/appkit/react";

import TokenTransfer from "./blockchain/TokenTransfer";

function App() {
  return (
    <>
    <div>
      <div className="flex justify-end p-4 bg-slate-950">
        <AppKitButton />
      </div>
      <TokenTransfer />
      

    </div>
      
    </>
  );
}

export default App;
