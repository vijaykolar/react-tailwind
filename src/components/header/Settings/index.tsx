import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { usePopper } from "react-popper";
import { settingsLinks } from "./data";
import { SettingsLinksTypes } from "./SettingsLinksTypes";
import SettingsItem from "./SettingsItem";

function Settings(): React.JSX.Element {
  let [referenceElement, setReferenceElement] =
    useState<null | HTMLButtonElement>(null);
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement);
  return (
    <Popover className="relative">
      <Popover.Button aria-label="settings">
        <HiOutlineCog6Tooth className="text-gray-500" size={24} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="absolute z-10 w-72 dark:border-gray-600 right-0 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="grid w-full grid-cols-3 p-4 gap-1 overflow-y-auto max-h-72">
            {settingsLinks.map((setting: SettingsLinksTypes) => (
              <SettingsItem key={setting.id} setting={setting} />
            ))}
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Settings;
