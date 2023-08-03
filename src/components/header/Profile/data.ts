import { IconType } from "react-icons";

export const profile: ProfileTypes[] = [
  {
    id: Math.random(),
    title: "profile",
  },
  {
    id: Math.random(),
    title: "dashboard",
  },
  {
    id: Math.random(),
    title: "activity",
  },
  {
    id: Math.random(),
    title: "settings",
  },
  {
    id: Math.random(),
    title: "privacy",
  },
  {
    id: Math.random(),
    title: "help center",
  },
];

type ProfileTypes = {
  id: number;
  title: string;
  icon?: IconType;
};
