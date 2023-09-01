import Image from "next/image";
import Link from "next/link";
import DiscountCountdown from "../../UI/discountCountdown/DiscountCountdown";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  numberOfDiscountDate: number;
  buttonText: string;
  href: string;
}
const BannerBox: React.FC<Props> = ({
  title,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
  numberOfDiscountDate,
  buttonText,
  href,
}) => {
  const { width } = useWindowDimensions();
  let imageWidth = width >= 2000 ? 1300 : imgWidth;
  return (
    <div className="col-span-6 lg:col-span-6 flex  justify-center  shadow-2xl relative rounded-lg overflow-hidden dark:bg-gray-500/70 !dark:bg-blend-multiply">
      <Image
        src={imgSrc}
        width={imageWidth}
        height={imgHeight}
        alt={title}
        className="drop-shadow-lg object-cover w-full object-center hover:scale-110 transition duration-1000"
      />

      <div className="flex justify-between items-center sm:block absolute top-[25%]   sm:top-3  md:top-8  lg:top-2  2xl:top-6 sm:left-6 sm:w-[55%] md:w-1/2 lg:w-[55%] xl:w-1/2">
        <h3 className="text-palette-secondary text-xl font-bold sm:text-2xl sm:font-normal md:text-2xl 2xl:text-3xl   sm:pt-8 lg:pt-2 xl:pt-8">
          {title}
        </h3>
        <p className="hidden sm:block text-palette-secondary/80 leading-6 lg:text-[12px] xl:text-base my-2 sm:my-4 lg:my-2 2xl:my-4 rtl:2xl:mt-6">
          {description}
        </p>
        <Link
          href={href}
          className="py-2 px-3 sm:py-3 lg:py-2 xl:py-3 sm:px-6 rounded-lg bg-palette-primary/90 hover:bg-palette-primary/100 transition-all duration-300 shadow-lg 2xl:mt-4 mr-2   sm:mr-14    inline-block  text-palette-side text-[12px] rtl:sm:text-sm"
        >
          {buttonText}
        </Link>
      </div>
      <DiscountCountdown targetDate={numberOfDiscountDate} />
    </div>
  );
};

export default BannerBox;
