import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export function AppColorPicker() {
  const [color, setColor] = useState("rgba(255,255,255,1)");

  return <ColorPicker value={color} onChange={setColor} />;
}
