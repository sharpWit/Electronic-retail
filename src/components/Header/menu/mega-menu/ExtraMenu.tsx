import Link from "next/link";

import { extraMenu } from "../../../../mock/menuItems";

const ExtraMenu = () => {
  return (
    <div className="flex items-center rtl:border-r-2 border-gray-300 grow rtl:mx-5 ">
      {extraMenu.map((menuItem) => {
        return (
          <div
            className="flex items-center text-base/90 mx-2"
            key={menuItem.title}
          >
            <menuItem.icon />
            <Link href={menuItem.href}>{menuItem.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraMenu;
