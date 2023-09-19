import { BsFillSuitHeartFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import Link from "next/link";

const Footer = () => {
  const StartQuot = RiDoubleQuotesR;
  const EndQuot = RiDoubleQuotesL;
  return (
    <footer className="mt-12">
      <div className="border-t-[1px] border-slate-500/30">
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="border-t-[1px] border-slate-500/30 text-center text-xs md:text-sm py-4">
        <div>
          © تمام حقوق این سایت محفوظ است - طراحی و توسعه با
          <BsFillSuitHeartFill
            style={{
              color: "#ee384e",
              margin: "0 0.3rem 0 0.3rem",
              fontSize: "1rem",
              display: "inline",
            }}
          />
          سعید خسروی
        </div>
        <div className="py-1">
          <StartQuot
            style={{
              display: "inline",
              verticalAlign: "top",
              fontSize: "0.8rem",
              color: "#A71B4A",
            }}
          />
          کار برای بهبود زندگی است نه برعکس.
          <EndQuot
            style={{
              display: "inline",
              verticalAlign: "top",
              fontSize: "0.8rem",
              color: "#A71B4A",
            }}
          />
          &nbsp;
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-palette-side underline font-bold bg-palette-primary px-2"
          >
            PC-shop
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
