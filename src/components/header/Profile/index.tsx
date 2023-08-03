import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Popover, Transition } from "@headlessui/react";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineUserPlus,
} from "react-icons/hi2";

import { profile, ProfileTypes } from "./data";

function Profile(): React.JSX.Element {
  return (
    <Popover className="relative">
      <Popover.Button aria-label="profile">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://prium.github.io/phoenix/v1.9.0/assets/img/team/40x40/57.webp"
            alt="username"
          />
        </div>
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
        <Popover.Panel className="absolute  z-10 w-72 bg-white  right-0 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <div className="text-center p-3 mt-3">
              <div className="h-10 w-10 mx-auto rounded-full overflow-hidden">
                <img
                  src="https://prium.github.io/phoenix/v1.9.0/assets/img/team/40x40/57.webp"
                  alt="username"
                />
              </div>
              <h5 className="font-semibold text-gray-700 text-sm mt-2">
                Vijay Kolar
              </h5>
            </div>
            <div className="p-4 pt-0">
              <label htmlFor="status"></label>
              <input
                id="status"
                name="status"
                type="text"
                placeholder="Update your status"
                className="w-full border-gray-300 rounded-md p-2 px-3 text-xs focus:outline-0 border border-gray-300 focus:border-gray-500"
              />
            </div>
            <div className="py-3 mb-3 border-b border-t border-gray-300 h-40 overflow-y-auto">
              <ul>
                {profile.map((el: ProfileTypes) => {
                  const { Icon }: any = el;
                  return (
                    <li key={el.id}>
                      <Link
                        to="/"
                        className="flex px-4 gap-x-1.5 text-xs py-2 hover:bg-gray-100 transition-all duration-300 capitalize items-center text-gray-500"
                      >
                        <span>
                          <Icon size={20} />
                        </span>
                        <span>{el.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pb-3 border-b border-gray-300">
              <Link
                to="/"
                className="flex px-4 gap-x-1 text-xs py-2 hover:bg-gray-100 capitalize items-center text-gray-500 transition-all duration-300"
              >
                <span>
                  <HiOutlineUserPlus size={20} />
                </span>
                <span>add another account</span>
              </Link>
            </div>
            <div className="px-4 py-3">
              <div>
                <button className="w-full bg-gray-100 text-xs text-gray-600 p-2 font-semibold flex items-center justify-center gap-1">
                  <span>
                    <HiOutlineArrowRightOnRectangle size={24} />
                  </span>
                  Sign out
                </button>
              </div>
              <ul className="flex items-center justify-center mt-2 gap-x-2">
                <li className="relative after:absolute after:rounded-full after:h-1 after:w-1 after:content-['']  after:bg-gray-500 after:left-0 after:top-1/2 after:left-0 px-2 ">
                  <Link className="text-[10px] text-gray-500 capitalize" to="/">
                    privacy policy
                  </Link>
                </li>
                <li className="relative after:absolute after:rounded-full after:h-1 after:w-1 after:content-['']  after:bg-gray-500 after:left-0 after:top-1/2 after:left-0 px-2 ">
                  <Link className="text-[10px] text-gray-500 capitalize" to="/">
                    terms
                  </Link>
                </li>
                <li className="relative after:absolute after:rounded-full after:h-1 after:w-1 after:content-['']  after:bg-gray-500 after:left-0 after:top-1/2 after:left-0 px-2 ">
                  <Link className="text-[10px] text-gray-500 capitalize" to="/">
                    cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Profile;
