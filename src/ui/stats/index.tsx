import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils/classNames";
import StatsItem from "@/ui/stats/stats-item";

const stats = [
  {
    name: "Total Subscribers",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Open Rate",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Avg. Click Rate",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
];

export default function Stats() {
  return (
    <>
      {stats.map((item) => (
        <StatsItem item={item} key={item.name} />
      ))}
    </>
  );
}
