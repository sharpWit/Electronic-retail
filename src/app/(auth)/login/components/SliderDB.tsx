"use client";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/UI/Spinner ";
import { getSlider } from "../../../pages/api/apiSlider";

const SliderDB = () => {
  const {
    isLoading,
    data: slider,
    error,
  } = useQuery({
    queryKey: ["slider"],
    queryFn: getSlider,
  });

  if (isLoading) return <Spinner />;

  // let sliderContents = {};
  // for (let key in slider) {
  //   console.log(slider[key]);
  // }

  slider?.map((item) => console.log(item.title));
  // console.log(slider[key]);

  return (
    <div>
      <ul>
        {slider?.map((item) => (
          <li key={item.id}> {item.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderDB;
