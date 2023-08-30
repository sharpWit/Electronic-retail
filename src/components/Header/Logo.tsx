import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0"
    >
      <Image
        src="/images/logo.png"
        alt="zishop-logo"
        priority
        width={120}
        height={25}
        className="cursor-pointer"
        style={{
          maxWidth: "100%",
          objectFit: "contain",
          width: "auto",
          height: "auto",
        }}
      />
    </Link>
  );
};

export default Logo;
