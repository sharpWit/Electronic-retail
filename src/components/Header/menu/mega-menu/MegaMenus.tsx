import { useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { Transition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "@/store/megaMenu-slice ";
import { IMegaMenuRootState } from "@/types/megaMenu ";
import MenusContainer from "./MenusContainer";

const MegaMenus = () => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  function showMegaMenuHandler() {
    dispatch(megaMenuActions.openMegaMenu());
  }
  function closeMegaMenuHandler() {
    dispatch(megaMenuActions.closeMegaMenu());
  }
  const isMegaMenuOpen = useSelector(
    (state: IMegaMenuRootState) => state.megaMenu.isMegaMenuOpen
  );

  return (
    <div
      className="flex items-center"
      onMouseOver={showMegaMenuHandler}
      onMouseOut={closeMegaMenuHandler}
    >
      <div className="flex items-center font-bold cursor-pointer">
        <IoMenu style={{ fontSize: "2rem" }} />
        <h3 className=" rtl:mr-1">دسته‌بندی کالا‌ها</h3>
      </div>

      <Transition
        nodeRef={nodeRef}
        in={isMegaMenuOpen!}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <div ref={nodeRef} className="z-[100]">
              <div
                className={`fixed top-[8.2rem] inset-0 bg-gray-600/60
                ${
                  state === "entering"
                    ? "animate-fadeEntering"
                    : state === "entered"
                    ? "opacity-100"
                    : "animate-fadeExit"
                }
                `}
                onClick={closeMegaMenuHandler}
              ></div>
              <div className="absolute top-full left-0 right-0 bg-palette-card z-[110] shadow-md rounded-br-lg rounded-bl-lg">
                <MenusContainer />
              </div>
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default MegaMenus;
