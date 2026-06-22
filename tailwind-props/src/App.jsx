import { useState } from "react";

import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-2xl items-center">
        Hi Abhineet
      </h1>
      {/* <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" src="/src/assets/hero.png" alt="ChitChat Logo" />
        <div>
          <div class="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p class="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div> */}
      <Card username="React code" btnText="click me" />
      <Card username="Abhineet" />
    </>
  );
}

export default App;
