import { useContext, useEffect, useState } from "react";
import { AppColorPicker } from "./color-picker";
import { UpdateStorageContext } from "../context/update-storage-context";

const BackgroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#000"
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, color]);

  return (
    <div className="w-full  flex flex-col p-3 gap-8 overflow-auto h-screen">
      <div className="flex justify-between">
        <p className="text-sm">Background</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Rounded</p>
          <p className="text-xs">{rounded} px</p>
        </div>

        <input
          type="range"
          min={0}
          max="200"
          value={rounded}
          onChange={(e) => setRounded(e.target.value)}
          className="range"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Padding</p>
          <p className="text-xs">{padding} px</p>
        </div>

        <input
          type="range"
          min={0}
          max="100"
          value={padding}
          onChange={(e) => setPadding(e.target.value)}
          className="range"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Background Color</p>
        </div>

        <AppColorPicker selectedColor={setColor} defaultColor="#000000" />
      </div>

      <div className="my-8"></div>
    </div>
  );
};

export default BackgroundController;
