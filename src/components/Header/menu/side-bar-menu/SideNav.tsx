import { forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import SideNavContent from "./SideNavContent";
import Logo from "../../Logo";

interface Props {
  state?: string;
  onClose: () => void;
  children?: React.ReactNode;
  ref: React.HTMLProps<HTMLDivElement>;
}

const SideNav = forwardRef<HTMLDivElement, Props>(({ state, onClose }, ref) => {
  return (
    <div
      ref={ref}
      className={`max-w-[380px] w-[90%] h-screen fixed top-0 shadow-md z-[1000] bg-palette-card origin-left overflow-y-auto "right-0 translate-x-[100%]"
        ${
          state === "entering"
            ? "rtl:animate-sidenavRTLEntering"
            : state === "entered"
            ? "translate-x-0"
            : " rtl:animate-sidenavRTLExit"
        }
        `}
    >
      <div
        className={`absolute top-3 rtl:right-0 rtl:mr-[85%] text-4xl cursor-pointer `}
        onClick={onClose}
      >
        <IoClose />
      </div>
      <div className="pt-5 pb-3  rtl:pr-5" onClick={onClose}>
        <Logo />
      </div>
      <hr />
      <SideNavContent />
    </div>
  );
});

SideNav.displayName = "SideNav";

export default SideNav;
