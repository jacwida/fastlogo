import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export function AppColorPicker({ selectedColor, defaultColor }) {
  const [color, setColor] = useState(defaultColor);

  return (
    <ColorPicker
      value={color}
      onChange={(e) => {
        setColor(e);
        selectedColor(e);
      }}
    />
  );
}
