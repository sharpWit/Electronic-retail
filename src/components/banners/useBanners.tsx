import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type TBanners = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  numberOfDiscountDate: number;
  href: string;
};

const useBanners = () => {
  const {
    data: bannerContent,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const data: TBanners[] = await axios
        .get("http://localhost:3000/api/bannerContents")
        .then((res) => res.data);
      if (error) {
        console.error(error);
        throw new Error("Banners could not be loaded");
      }
      return data;
    },
  });
  return { bannerContent, isLoading, error };
};

export default useBanners;
