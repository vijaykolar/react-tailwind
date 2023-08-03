import { IconType } from "react-icons";
import {
  HiOutlineChartPie,
  HiOutlineCog6Tooth,
  HiOutlineGlobeAlt,
  HiOutlineInformationCircle,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";

export const profile: ProfileTypes[] = [
  {
    id: Math.random(),
    title: "profile",
    Icon: HiOutlineUser,
  },
  {
    id: Math.random(),
    title: "dashboard",
    Icon: HiOutlineChartPie,
  },
  {
    id: Math.random(),
    title: "activity",
    Icon: HiOutlineLockClosed,
  },
  {
    id: Math.random(),
    title: "settings & privacy",
    Icon: HiOutlineCog6Tooth,
  },
  {
    id: Math.random(),
    title: "help center",
    Icon: HiOutlineInformationCircle,
  },
  {
    id: Math.random(),
    title: "language",
    Icon: HiOutlineGlobeAlt,
  },
];

export type ProfileTypes = {
  id: number;
  title: string;
  Icon?: IconType;
};
