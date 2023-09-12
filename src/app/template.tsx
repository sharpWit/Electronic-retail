"use client";

import NextNProgress from "nextjs-progressbar";
import Header from "@/components/Header/Header ";
import Footer from "@/components/Footer/Footer ";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextNProgress height={7} />
      <Header />
      <main className="flex-grow  md:mt-40">{children}</main>;
      <Footer />
    </>
  );
};

export default Template;
