import Link from "next/link";
import { MdLocalFireDepartment, MdOutlineFavorite } from "react-icons/md";

const ExtraMenu = () => {
  return (
    <div className="flex items-center rtl:border-r-2 border-gray-300 grow rtl:mx-5 ">
      <ul className="flex items-center text-base/90 mx-2 gap-4">
        <li className="flex items-center ml-1">
          <MdLocalFireDepartment />
          <Link href="/offers">پیشنهادات ویژه</Link>
        </li>
        <li className="flex items-center ml-1">
          <MdOutlineFavorite />
          <Link href="/favorite">علاقه‌مندی‌ها</Link>
        </li>
        <li>
          <Link href="/about">درباره‌ی ما</Link>
        </li>
      </ul>
    </div>
  );
};

export default ExtraMenu;
