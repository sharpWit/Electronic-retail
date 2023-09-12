import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeMenuItemActions } from "@/store/activeMenuItem-slice ";
import SubMenu from "./SubMenu";
import MenuItems from "@/components/UI/MenuItems/MenuItems ";
import { TDropDown } from "@/types/dropDown ";
import menuItems from "@/mock/menuItems ";

const MenusContainer = () => {
  const [subMenuItems, setSubMenuItems] = useState<TDropDown[]>();
  const dispatch = useDispatch();
  function activeItem(
    submenuList: TDropDown[] | undefined,
    activeItemIndex: number,
    activeItemName: string
  ) {
    setSubMenuItems(submenuList);
    dispatch(activeMenuItemActions.setActiveMenuItemIndex(activeItemIndex));
    dispatch(activeMenuItemActions.setActiveMenuItemText(activeItemName));
  }

  useEffect(() => {
    setSubMenuItems(menuItems[0].productsGroup);
    return () => {
      dispatch(activeMenuItemActions.setActiveMenuItemIndex(0));
      dispatch(activeMenuItemActions.setActiveMenuItemText("digital"));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" flex">
      <nav className="md:w-80 md:py-4 rtl:border-l-2 border-slate-300">
        <MenuItems onMouseOver={activeItem} />
      </nav>
      <SubMenu subMenuItems={subMenuItems} />
    </div>
  );
};

export default MenusContainer;
