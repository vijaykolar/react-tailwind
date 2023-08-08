import { Dispatch, SetStateAction } from "react";

export type SideDrawerProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (x: boolean) => void;
};
