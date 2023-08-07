import React from "react";

import { HiOutlineBars2, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useTheme } from 'next-themes';

import Logo from "./Logo";
import Search from "./Search";
import Notification from "./Notification";
import Settings from "./Settings";
import Profile from "./Profile";

const Header = ({ siteTitle = "Dashbaord" }): React.JSX.Element => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
  <header className="border-b border-gray-300 dark:border-gray-600 ">
    <div className="flex justify-between items-center p-2 md:px-4">
      <div className="flex items-center gap-2">
        <button aria-label="menu" onClick={() => alert(1)}>
          <HiOutlineBars2 className="md:hidden text-gray-500" size={24} />
        </button>
        <Logo title={siteTitle} />
      </div>

      <div className="hidden md:block">
        <Search />
      </div>
      <ul className="flex items-center gap-3 md:gap-x-6">
        <li>
          <button  onClick={() =>
            theme == 'dark' ? setTheme('light') : setTheme('dark')
          }>
             {currentTheme !== 'dark' ? <HiOutlineMoon  className="text-gray-500" size={24} /> : <HiOutlineSun  className="text-gray-500" size={24} />}
          </button>
        </li>
        <li>
          <Notification />
        </li>
        <li>
          <Settings />
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </div>
  </header>
)};

export default Header;
