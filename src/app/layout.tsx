"use client";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import store from "../store";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import Header from "@/components/Header/Header ";
import Footer from "@/components/Footer/Footer ";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export const metadata: Metadata = {
  title: "فروشگاه بست ستاپس",
  description: "طراحی و توسعه این فروشگاه توسط سعید خسروی انجام شده است",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="px-5 xl:px-16">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Provider store={store}>
            <div className="flex flex-col min-h-[100vh]">
              <NextNProgress height={7} />
              <Header />
              <main className="flex-grow  md:mt-40">{children}</main>
              {/* <Footer /> */}
            </div>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={true}
              rtl={true}
              position={"top-left"}
            />
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
