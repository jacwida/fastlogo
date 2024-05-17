import { useState } from "react";
import Buttons from "./components/buttons";
import IconController from "./components/icon-controller";
import BackgroundController from "./components/background-controller";
import Preview from "./components/preview";
import { UpdateStorageContext } from "./context/update-storage-context";

function App() {
  const [active, setActive] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <main className="max-w-screen-2xl mx-auto h-screen  bg-gray-100">
        <header className="flex w-full border-b px-3 py-3 items-center justify-between">
          <div className="flex items-center gap-1">
            <img alt="" src="/icon.svg" className="w-9 h-9" />
            <h1 className="font-semibold text-lg">Logomaker</h1>
          </div>

          <button
            className="btn bg-black text-white btn-md"
            onClick={() => setDownloadIcon(Date.now())}
          >
            Download
          </button>
        </header>

        <div className="w-full flex ">
          <div className="w-64 border-r">
            <Buttons active={active} setActive={setActive} />
          </div>
          <div className=" flex-1 flex">
            <div className="w-4/12 mb-16 overflow-y-auto border-r">
              {active === 0 ? <IconController /> : <BackgroundController />}
            </div>

            <div className="w-8/12">
              <Preview downloadIcon={downloadIcon} />
            </div>
          </div>
        </div>
      </main>
    </UpdateStorageContext.Provider>
  );
}

export default App;
