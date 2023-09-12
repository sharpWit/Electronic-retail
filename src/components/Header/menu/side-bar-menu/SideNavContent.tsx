import Link from "next/link";
import { useDispatch } from "react-redux";
import { activeMenuItemActions } from "@/store/activeMenuItem-slice ";
import { sideNavBarActions } from "@/store/sideNavBar-slice ";
import MenuItems from "../../../UI/MenuItems/MenuItems";
import { TDropDown } from "@/types/dropDown ";
import { extraMenu } from "@/mock/menuItems ";

const SideNavContent = () => {
  const dispatch = useDispatch();
  const openNav = (
    sidebarSideContent: TDropDown[] = [],
    activeItemName: string,
    activeItemIndex: number
  ) => {
    dispatch(sideNavBarActions.setSidebarEntries(sidebarSideContent));
    dispatch(sideNavBarActions.openSidebar());
    dispatch(activeMenuItemActions.setActiveMenuItemText(activeItemName));
    dispatch(activeMenuItemActions.setActiveMenuItemIndex(activeItemIndex));
  };
  return (
    <div className="absolute w-full">
      <div className="flex flex-col mt-3 pt-3  rtl:px-5 cursor-pointer">
        {extraMenu.map((menuItem) => {
          return (
            <div
              className="flex items-center py-3 text-palette-mute "
              key={menuItem.title}
            >
              <menuItem.icon />
              <Link href={menuItem.href} className="mx-4">
                {menuItem.title}
              </Link>
            </div>
          );
        })}
        <hr className="mt-6 mb-4 border-gray-200" />
      </div>
      <h2 className="font-bold text-lg py-3  rtl:px-5">دسته‌بندی کالا‌ها</h2>
      <MenuItems onClick={openNav} />
    </div>
  );
};

export default SideNavContent;
