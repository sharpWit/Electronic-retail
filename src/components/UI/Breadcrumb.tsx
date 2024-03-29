"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsShop } from "react-icons/bs";
import { IBreadcrumb } from "@/types/breadcrumb ";

const convertBreadcrumb = (str: string) => {
  return str
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

const Breadcrumb = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[] | []>([]);
  const pathsName = usePathname();
  const decodedURL = decodeURIComponent(pathsName);
  useEffect(() => {
    if (pathsName) {
      const paths = decodedURL.split("/");
      paths.shift();

      const pathsArray = paths.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + paths.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathsArray);
    }
  }, [pathsName, decodedURL]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className="flex text-[11px] sm:text-sm text-palette-mute dark:text-slate-300 mt-4 md:-mt-4 mb-3 md:my-none overflow-auto whitespace-nowrap">
      <nav className="flex py-3 px-2 sm:px-5 leading-6">
        <ul className="flex items-center space-x-1 md:space-x-3">
          <li className="cursor-pointer">
            <Link href="/" className="flex rtl:pl-2">
              <span>
                <BsShop style={{ fontSize: "1.2rem" }} />
              </span>
              <span className="rtl:mr-1">فروشگاه Best-Setups</span>
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, i) => {
            return (
              <li className="flex items-center" key={breadcrumb.href}>
                <span>/</span>
                <Link href={breadcrumb.href} className="inline-block px-2">
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
