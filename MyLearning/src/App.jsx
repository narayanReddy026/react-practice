import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="  w-full h-screen duration-200  "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-12">
          <button
            onClick={() => setColor("red")}
            className="rounded-full px-4 py-1 text-white bg-red-600 shadow-lg"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="rounded-full px-4 py-1 text-white bg-green-600 shadow-lg"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="rounded-full px-4 py-1 text-white bg-blue-600 shadow-lg"
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
