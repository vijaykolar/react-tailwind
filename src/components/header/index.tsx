import React from "react";

import { HiOutlineBars2 } from "react-icons/hi2";

import Logo from "./Logo";
import Search from "./Search";
import Notification from "./Notification";
import Settings from "./Settings";

const Header = ({ siteTitle = "" }): React.JSX.Element => (
  <header className="border-b border-gray-300 bg-white">
    <div className="flex justify-between items-center p-2 md:px-4">
      <div className="flex items-center gap-2">
        <button onClick={() => alert(1)}>
          <HiOutlineBars2 className="md:hidden text-gray-500" size={24} />
        </button>
        <Logo title={siteTitle} />
      </div>

      <div className="hidden md:block">
        <Search />
      </div>
      <ul className="flex items-center gap-3 md:gap-x-6">
        <li>
          <Notification />
        </li>
        <li>
          <Settings />
        </li>
        <li>
          <button>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src="https://prium.github.io/phoenix/v1.9.0/assets/img/team/40x40/57.webp"
                alt=""
              />
            </div>
          </button>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
