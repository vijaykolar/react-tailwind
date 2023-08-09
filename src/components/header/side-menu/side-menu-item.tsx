import { classNames } from "@/utils/classNames";
import Link from "next/link";

function SideMenuItem({ item }: any) {
  return (
    <li key={item.name}>
      <Link
        href={item.href}
        className={classNames(
          item.current
            ? "bg-gray-50 dark:bg-gray-700 text-indigo-600"
            : "text-gray-700 dark:text-gray-500 hover:text-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-700",
          "group flex gap-x-2 rounded-md p-2 text-sm leading-6 font-medium capitalize",
        )}
      >
        <item.icon
          className={classNames(
            item.current
              ? "text-indigo-600"
              : "text-gray-400 group-hover:text-indigo-600",
            "h-5 w-5 shrink-0",
          )}
          aria-hidden="true"
        />
        {item.name}
      </Link>
    </li>
  );
}

export default SideMenuItem;
