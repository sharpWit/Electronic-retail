import Link from "next/link";
import { useRef } from "react";
import { HiOutlineArrowSmRight, HiChevronLeft } from "react-icons/hi";
import { Transition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { sideNavBarActions } from "@/store/sideNavBar-slice ";
import { IActiveMenuItemRootState } from "@/types/activeMenuItem ";
import { ISideNavBarRootState } from "@/types/sidebar ";
import DropDown from "@/components/UI/DropDown ";

const SideNavSide = () => {
  const dispatch = useDispatch();

  const dropDownList = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.dropDownList
  );

  const isSidebarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isSidebarOpen
  );

  const activeMenuItemText = useSelector(
    (state: IActiveMenuItemRootState) => state.activeMenuItem.activeMenuItemText
  );

  const closeSidebar = () => {
    dispatch(sideNavBarActions.closeSidebar());
  };

  const closeNavbar = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  const nodeRef = useRef<HTMLDivElement>(null);

  const BackArrow = HiOutlineArrowSmRight;

  return (
    <>
      {dropDownList.length ? (
        <Transition
          nodeRef={nodeRef}
          in={isSidebarOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div
                ref={nodeRef}
                className={`max-w-[380px] w-[90%] h-screen pb-4 fixed top-0 shadow-md z-[1010]   bg-palette-card origin-left overflow-auto md:hidden right-0
                
                ${
                  state === "entering"
                    ? " rtl:animate-sidenavRTLEntering"
                    : state === "entered"
                    ? "translate-x-0"
                    : " rtl:animate-sidenavRTLExit"
                }
                `}
              >
                <div
                  className="flex items-center pt-4 pb-3 px-6 font-bold text-lg cursor-pointer"
                  onClick={closeSidebar}
                >
                  <BackArrow style={{ fontSize: "1.5rem" }} />
                  <h3 className=" rtl:mr-2 py-1">منو‌ی اصلی</h3>
                </div>

                <hr className="mb-6" />

                <div className=" rtl:pl-6 pb-6 mb-3 border-b-2 border-slate-400-600">
                  <Link
                    href={`/${activeMenuItemText}`}
                    className="flex items-center justify-between"
                  >
                    <div className="font-bold rtl:mr-6" onClick={closeNavbar}>
                      دیدن تمام محصولات این دسته
                    </div>
                    <HiChevronLeft style={{ fontSize: "1.5rem" }} />
                  </Link>
                </div>
                {dropDownList.map((item) => {
                  return (
                    <div key={item.title}>
                      <DropDown dropDown={item} />
                    </div>
                  );
                })}
              </div>
            );
          }}
        </Transition>
      ) : null}
    </>
  );
};

SideNavSide.displayName = "SideNavSide";
export default SideNavSide;
