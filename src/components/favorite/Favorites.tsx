"use client";

import { useSelector } from "react-redux";
import FavoriteItem from "./FavoriteItem";
import { IFavoriteRootState } from "@/types/favorite ";

const Favorites = () => {
  const favoriteItems = useSelector(
    (state: IFavoriteRootState) => state.favorite.items
  );

  return (
    <div className="w-full xl:max-w-[2100px] mx-auto">
      {favoriteItems.length ? (
        <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
          {favoriteItems.map((favoriteItem) => (
            <FavoriteItem key={favoriteItem.id} product={favoriteItem} />
          ))}
        </div>
      ) : (
        <p>در حال حاضر، هیچ آیتم مورد علاقه وجود ندارد.</p>
      )}
    </div>
  );
};

export default Favorites;
