import Link from "next/link";
import { footerContent } from "../../../mock/footer";

const FooterColumns = () => {
  return (
    <div className="flex justify-between flex-wrap flex-grow min-width-[800px] xl:rtl:pl-60">
      {footerContent.map((item) => {
        return (
          <div className="mt-6 md:mt-0" key={item.title}>
            <h2 className="text-md rtl:border-r-4 border-palette-primary px-2">
              {item.title}
            </h2>
            <div className="flex flex-col mt-2">
              {item.subtitles.map((subItem) => {
                return (
                  <Link
                    href={subItem.href}
                    key={subItem.text}
                    className="text-sm text-palette-base/90 px-4 py-2 hover:text-palette-base/100"
                  >
                    {subItem.text}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
