import { classNames } from "@/utils/classNames";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

function StatsItem({ item }: any) {
  return (
    <div key={item.name} className="p-4">
      <div className="text-base font-normal text-gray-900 dark:text-gray-500">
        {item.name}
      </div>
      <div className="mt-1 flex items-center justify-between md:block lg:flex">
        <div className="flex items-center text-2xl font-semibold text-indigo-600 ">
          {item.stat}
          <span className="ml-2 text-sm font-medium text-gray-500 ">
            from {item.previousStat}
          </span>
        </div>

        <div
          className={classNames(
            item.changeType === "increase"
              ? "bg-green-100  text-green-800 dark:bg-gray-700 dark:text-gray-500"
              : "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-gray-500",
            "flex bg-green-400 items-center rounded-full px-2 py-1 text-sm font-medium md:mt-2 lg:mt-0",
          )}
        >
          {item.changeType === "increase" ? (
            <ArrowUpIcon
              className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ArrowDownIcon
              className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
              aria-hidden="true"
            />
          )}

          <span className="sr-only">
            {item.changeType === "increase" ? "Increased" : "Decreased"} by
          </span>
          {item.change}
        </div>
      </div>
    </div>
  );
}
export default StatsItem;
