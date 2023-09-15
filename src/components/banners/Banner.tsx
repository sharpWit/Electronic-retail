"use client";

import BannerBox from "./banner-box/BannerBox";
import SectionTitle from "../UI/SectionTitle";
import Spinner from "../UI/Spinner";
import useBanners from "./useBanners";

const Banner = () => {
  const { bannerContent, isLoading, error } = useBanners();
  if (isLoading) return <Spinner />;

  return (
    <div className="flex items-center flex-col w-full xl:max-w-[2100px] my-4 md:my-8 mx-auto">
      <SectionTitle title={"فروش ویژه"} />
      <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
        {bannerContent?.length ? (
          bannerContent.map(
            ({
              id,
              title,
              description,
              buttonText,
              imgSrc,
              imgWidth,
              imgHeight,
              numberOfDiscountDate,
              href,
            }) => {
              return (
                <BannerBox
                  title={title}
                  description={description}
                  numberOfDiscountDate={numberOfDiscountDate}
                  href={href}
                  imgSrc={imgSrc}
                  imgWidth={imgWidth}
                  imgHeight={imgHeight}
                  buttonText={buttonText}
                  key={id}
                />
              );
            }
          )
        ) : (
          <p>در حال حاضر هیچ بنری موجود نیست</p>
        )}
      </div>
    </div>
  );
};

export default Banner;
