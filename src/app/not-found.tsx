"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/UI/buttons/Button ";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="h-[60vh] py-20 flex flex-col items-center top-[120px]">
      <h2 className="font-black text-4xl text-red-800 mb-4">
        404 صفحه یافت نشد
      </h2>
      <p>متاسفانه صفحه مورد نظر شما پیدا نشد!</p>
      <Button
        onClick={() => router.push("/")}
        color="primary"
        className="py-2 px-4 mt-5"
      >
        برگشت به صفحه اصلی
      </Button>
    </div>
  );
};

export default NotFoundPage;
