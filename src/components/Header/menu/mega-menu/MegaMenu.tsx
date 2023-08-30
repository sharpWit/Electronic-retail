import ExtraMenu from "./ExtraMenu";
import MegaMenus from "./MegaMenus";

const MegaMenu = () => {
  return (
    <div className="hidden md:flex items-center flex-grow">
      <MegaMenus />
      <ExtraMenu />
    </div>
  );
};

export default MegaMenu;
