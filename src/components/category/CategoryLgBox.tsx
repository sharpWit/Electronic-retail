import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  desc?: string;
  styles?: {
    backgroundColor: string;
    flexDirection: string;
    paddingInline: string;
    paddingBlock: string;
    textAlign?: string;
    gridRow: string;
    gridColumn: string;
  };
  href: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
}
const CategoryLgBox: React.FC<Props> = ({
  title,
  desc,
  styles,
  href,
  imgSrc,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div
      className={`flex justify-around items-center rounded-md shadow-lg overflow-hidden`}
      style={styles as React.CSSProperties}
    >
      <div className="mx-[0.5rem]">
        <h3 className="text-xl 2xl:text-2xl font-[500]">{title}</h3>
        <p className="text-sm mt-2">{desc}</p>
        <Link
          href={href}
          className="inline-block py-3 px-2 2xl:px-4 mt-4 bg-palette-primary hover:scale-105 transition-transform duration-300 shadow-xl rtl:text-xs text-palette-side rounded-lg"
        >
          دیدن همه محصولات
        </Link>
      </div>
      <Image
        src={imgSrc}
        alt={title}
        width={imgWidth}
        height={imgHeight}
        className="drop-shadow-lg hover:scale-95 transition-transform duration-300 "
      />
    </div>
  );
};

export default CategoryLgBox;
