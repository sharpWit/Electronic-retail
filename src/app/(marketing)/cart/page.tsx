import type { NextPage } from "next";
import CartList from "@/components/Cart/CartList ";
import OrderSummaryBox from "@/components/Cart/OrderSummaryBox ";
import Breadcrumb from "@/components/UI/Breadcrumb ";

const cart: NextPage = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="flex justify-center flex-col md:flex-row items-start relative max-w-[2100px] mx-auto">
        <CartList />
        <OrderSummaryBox />
      </div>
    </div>
  );
};

export default cart;
