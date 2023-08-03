import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineBell } from "react-icons/hi2";
import { notificationMenu } from "./data";
import { NotificationMenuTypes } from "./types";
import NotificationItem from "./NotificationItem";

function Notification(): React.JSX.Element {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="relative">
        <HiOutlineBell className="text-gray-500" size={24} />
        <span className="absolute text-[10px] h-4 w-4 rounded-full -right-1 -top-1 bg-red-500 text-white">
          3
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-16 mt-2 w-80 md:w-96 md:right-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <>
              <div className="flex justify-between p-4 py-3 border-b border-gray-300 ">
                <h5 className="text-sm font-semibold text-gray-700">
                  Notifications
                </h5>
                <button className="text-blue-700 text-xs font-normal hover:underline">
                  Mark all read
                </button>
              </div>
              <div>
                <ul>
                  {notificationMenu.map((no: NotificationMenuTypes) => (
                    <NotificationItem notification={no} key={no.id} />
                  ))}
                </ul>
              </div>
            </>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Notification;
