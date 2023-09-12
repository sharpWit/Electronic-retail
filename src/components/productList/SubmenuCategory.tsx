"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { FaComputer } from "react-icons/fa6";

interface Props {
  cat: string;
}

interface ISubCat {
  id: number;
  name: string;
  href: string;
  icon: string;
}

const SubmenuCategory = ({ cat }: Props) => {
  const { data: subCats, error } = useQuery({
    queryKey: ["subCats"],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:3000/api/subCategories?cat=${cat}`
      );
      if (!data.ok) {
        throw new Error("Failed!");
      }

      return data.json();
    },
  });

  const router = useRouter();

  function onClickHandler(subCategory: string) {
    if (subCats) {
      router.push(`/${cat}/${subCategory}`);
    }
  }

  return subCats ? (
    <div className="flex md:items-center flex-col mb-6">
      <h3 className="text-center md:text-2xl mb-3 md:mb-6">دسته‌بندی‌ها</h3>
      <div className="flex justify-center flex-wrap">
        {subCats?.map((subCat: ISubCat) => (
          <div
            className="flex flex-col items-center py-2 md:py-4 px-2 sm:px-3 md:px-6 bg-palette-card shadow-lg rounded-lg mx-1 my-1 md:mx-3 w-[5rem] sm:w-auto flex-grow cursor-pointer"
            key={subCat.id}
            onClick={() => onClickHandler(subCat.href)}
          >
            <div className=" md:text-[1.5rem] text-[2.5rem]">
              <FaComputer />
            </div>
            <h4 className="text-center text-[12px] md:text-base md:pt-3">
              {subCat.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default SubmenuCategory;
