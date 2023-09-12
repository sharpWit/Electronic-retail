import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import QueryProvider from "@/providers/QueryProvider ";
import ReduxProvider from "@/providers/ReduxProvider ";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

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
        <QueryProvider>
          <ReduxProvider>
            <div className="flex flex-col min-h-[100vh]">{children}</div>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={true}
              rtl={true}
              position={"top-left"}
            />
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
