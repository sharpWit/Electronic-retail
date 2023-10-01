import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { authOptions } from "@/utilities/auth ";
import { getServerSession } from "next-auth";

const About: NextPage = async () => {
  const StartQuot = RiDoubleQuotesR;
  const EndQuot = RiDoubleQuotesL;

  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex w-full xl:max-w-[2100px] mx-auto">
      <div className="w-full lg:w-1/2 mt-8 md:mt-0 px-4 sm:px-8 md:px-0">
        <p className="leading-8 md:text-justify">
          من سعید خسروی طراح و توسعه‌دهنده فرانت‌ند هستم{" "}
        </p>
        <br />
        <p>
          <StartQuot
            style={{
              display: "inline",
              verticalAlign: "top",
              fontSize: "0.8rem",
              color: "#A71B4A",
            }}
          />
          PC-shop
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
        </p>
        <p className="my-4">امیدوارم از تماشا و کار با این قالب لذت ببرید.</p>
        <p>سعید خسروی</p>
      </div>
      <div className="hidden md:block flex-grow text-center">
        <Image
          src="/images/about-me.svg"
          alt="about me"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default About;
