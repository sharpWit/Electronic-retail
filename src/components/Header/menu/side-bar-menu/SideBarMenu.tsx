import SideBar from "./SideBar";
import SideNavSide from "./SideNavSide";

const SideBarMenu = () => {
  return (
    <div className="md:hidden">
      <SideBar />
      <SideNavSide />
    </div>
  );
};

export default SideBarMenu;
