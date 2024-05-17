import { useContext, useEffect, useState } from "react";
import { AppColorPicker } from "./color-picker";
import { UpdateStorageContext } from "../context/update-storage-context";

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 300);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [fill, setFill] = useState(storageValue ? storageValue?.iconFill : 0);
  const [borderWidth, setBorderWidth] = useState(
    storageValue ? storageValue?.IconBorderWidth : 10
  );
  const [borderColor, setBorderColor] = useState(
    storageValue ? storageValue?.iconBorderColor : "#fff"
  );
  const [fillColor, setFillColor] = useState(
    storageValue ? storageValue?.iconFillColor : "#fff"
  );
  const [icon, setIcon] = useState(
    storageValue ? storageValue?.icon : "Activity"
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      IconBorderWidth: borderWidth,
      iconRotate: rotate,
      iconBorderColor: borderColor,
      iconFillColor: fillColor,
      iconFill: fill,
      icon: icon,
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, borderColor, fillColor, borderWidth, icon]);

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
          max="300"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="range"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Rotate</p>
          <p className="text-xs">{rotate} °</p>
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

        <AppColorPicker selectedColor={setBorderColor} defaultColor="#ffffff" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Fill opacity</p>
          <p className="text-xs">{fill} %</p>
        </div>

        <input
          type="range"
          min={0}
          max="100"
          value={fill}
          onChange={(e) => setFill(e.target.value)}
          className="range"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Fill Color</p>
        </div>

        <AppColorPicker selectedColor={setFillColor} defaultColor="#ffffff" />
      </div>

      <div className="my-8"></div>
    </div>
  );
};

export default IconController;
