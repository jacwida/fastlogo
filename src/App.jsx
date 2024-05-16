import { useState } from "react";
import Buttons from "./components/buttons";
import IconController from "./components/icon-controller";
import BackgroundController from "./components/background-controller";

function App() {
  const [active, setActive] = useState(0);
  return (
    <main className="max-w-screen-2xl mx-auto h-screen  bg-gray-100">
      <header className="flex w-full border-b px-3 py-3 items-center justify-between">
        <div className="flex items-center gap-1">
          <img alt="" src="/icon.svg" className="w-9 h-9" />
          <h1 className="font-semibold text-lg">Logomaker</h1>
        </div>

        <div className="h-11 bg-black text-white font-semibold flex justify-center items-center rounded px-4 py-2">
          Download
        </div>
      </header>

      <div className="w-full flex ">
        <div className="w-64 border-r">
          <Buttons active={active} setActive={setActive} />
        </div>
        <div className=" flex-1 flex">
          <div className="3-4/12 mb-16 overflow-y-auto border-r">
            {active === 0 ? <IconController /> : <BackgroundController />}
          </div>

          <div></div>
        </div>
      </div>
    </main>
  );
}

export default App;
