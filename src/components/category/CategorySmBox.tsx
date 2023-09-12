import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  title: string;
  imgSrc: string;
  href: string;
}
const CategorySmBox: React.FC<Props> = ({ name, title, imgSrc, href }) => {
  return (
    <Link href={`${href}`}>
      <div className="flex flex-col items-center text-center min-w-[7rem] w-[9.3rem] sm:w-[10rem] my-2">
        <div
          className={`flex items-center justify-center w-[60px] h-[60px] rounded-full bg-palette-${name}`}
        >
          <Image
            src={imgSrc}
            alt={title}
            width={45}
            height={45}
            className="drop-shadow-lg"
          />
        </div>
        <h3 className="text-sm md:text-base font-bold mt-2">{title}</h3>
      </div>
    </Link>
  );
};

export default CategorySmBox;
