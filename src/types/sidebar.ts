import { TDropDown } from "./dropDown";

export type TSideNavBar = {
  isSidebarOpen: boolean;
  isNavbarOpen: boolean;
  dropDownList: TDropDown[];
};

export type TSideNavBarRootState = {
  sideNavBar: TSideNavBar;
};
