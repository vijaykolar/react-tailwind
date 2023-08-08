import { displayValue } from "react-query/types/devtools/utils";
import { navigation, teams } from "@/components/header/side-menu/data";
import SideMenuItem from "@/components/header/side-menu/side-menu-item";
import { classNames } from "@/utils/classNames";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

type SideMenuBarProps = {
  classes?: string;
};
function SideMenuBar({ classes }: SideMenuBarProps) {
  return (
    <div
      className={`flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ${classes}`}
    >
      <div className="flex h-16 shrink-0 items-center text-2xl tracking-wider font-bold text-gray-800">
        NextDash
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <SideMenuItem key={item.name} item={item} />
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Your okay
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                    )}
                  >
                    <span
                      className={classNames(
                        team.current
                          ? "text-indigo-600 border-indigo-600"
                          : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white",
                      )}
                    >
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              <Cog6ToothIcon
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                aria-hidden="true"
              />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenuBar;
