import { icons } from "lucide-react";

import { useState } from "react";

const AllIcons = ({ selectedIcon }) => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [icon, setIcon] = useState(
    storageValue ? storageValue?.icon : "Activity"
  );
  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];

    if (!LucidIcon) {
      console.error(`Icon "${name}" not found.`);
      return null;
    }

    return <LucidIcon color={color} size={size} />;
  };
  return (
    <div>
      <button className="btn btn-square btn-neutral">
        <Icon name={icon} color="#000" size={20} />
      </button>
    </div>
  );
};

export default AllIcons;
