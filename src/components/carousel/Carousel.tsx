"use client";

import Slider from "react-slick";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import Slide from "./Slide";
import useCarousel from "./useCarousel";
import { NextArrow, PrevArrow } from "./Arrows";
import Spinner from "../UI/Spinner";

const Carousel = () => {
  const { sliders, isLoading, error } = useCarousel();

  if (isLoading) return <Spinner />;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <PrevArrow to="prev" />,
    nextArrow: <NextArrow to="next" />,
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {sliders?.map((item) => {
          return <Slide key={item.id} {...item} />;
        })}
      </Slider>
      <>
        <div className="absolute top-1/2 left-4  md:left-3 lg:left-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <HiOutlineChevronLeft />
        </div>
        <div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <HiOutlineChevronRight />
        </div>
      </>
    </div>
  );
};

export default Carousel;
