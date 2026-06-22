import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap inset-x-0 bottom-12 justify-center px-2">
          <div className="flex flex-wrap justify-center gap-2 rounded-full bg-white px-3 py-3 shadow-lg">
            <button
              className="rounded-full px-4 py-1 text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>

            <button
              className="rounded-full px-4 py-1 text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="rounded-full px-4 py-1 text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className="rounded-full px-4 py-1 text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>

            <button
              className="rounded-full px-4 py-1 text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>

            <button
              className="rounded-full px-4 py-1 text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>

            <button
              className="rounded-full px-4 py-1 text-black shadow-lg border"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
