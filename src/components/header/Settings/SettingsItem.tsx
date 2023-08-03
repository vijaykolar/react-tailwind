import React from "react";
import { SettingsLinksTypes } from "./SettingsLinksTypes";

type SettingsItemTypes = {
  setting: SettingsLinksTypes;
};

function SettingsItem({ setting }: SettingsItemTypes) {
  return (
    <li
      key={setting.id}
      className="text-center p-2 hover:bg-gray-200 rounded-md transition-all"
    >
      <button>
        <div>
          <img
            className="h-6 w-6 m-auto mb-1"
            src={setting.image}
            alt={setting.title}
          />
        </div>
        <span className="text-gray-700 text-xs capitalize">
          {setting.title}
        </span>
      </button>
    </li>
  );
}

export default SettingsItem;
