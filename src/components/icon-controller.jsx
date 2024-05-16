import { useState } from "react";
import { AppColorPicker } from "./color-picker";

const IconController = () => {
  const [size, setSize] = useState(200);
  const [rotate, setRotate] = useState(0);
  const [borderWidth, setBorderWidth] = useState(10);

  return (
    <div className="w-full  flex flex-col p-3 gap-8 overflow-auto h-screen">
      <div className="flex justify-between">
        <p className="text-sm">Icon</p>
        <p className="text-sm">Activity</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Size</p>
          <p className="text-xs">{size} px</p>
        </div>

        <input
          type="range"
          min={0}
          max="500"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="range"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Rotate</p>
          <p className="text-xs">{rotate}</p>
        </div>

        <input
          type="range"
          min={0}
          max="360"
          value={rotate}
          onChange={(e) => setRotate(e.target.value)}
          className="range"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Border Width</p>
          <p className="text-xs">{borderWidth} px</p>
        </div>

        <input
          type="range"
          min={0}
          max="100"
          value={borderWidth}
          onChange={(e) => setBorderWidth(e.target.value)}
          className="range"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Border Color</p>
        </div>

        <AppColorPicker />
      </div>

      <div className="my-8"></div>
    </div>
  );
};

export default IconController;
