import Link from "next/link";
import { HiOutlineLogin } from "react-icons/hi";

const LoginBtn = () => {
  return (
    <Link href={"/login"} aria-label="User actions">
      <div className="hidden md:flex items-center rounded-lg  py-1 px-2  rtl:ml-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm ">
        <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
        <p className=" rtl:mr-2 text-xs">ورود | ثبت‌نام</p>
      </div>
      <div className="md:hidden rtl:ml-3 rtl:mr-1 ">
        <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
      </div>
    </Link>
  );
};

export default LoginBtn;
