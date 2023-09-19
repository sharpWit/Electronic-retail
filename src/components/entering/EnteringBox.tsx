"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Input from "../UI/Input";
import { IUser } from "@/types/user ";

interface Props {
  title: string;
  submitHandler: (user: IUser) => void;
  errorMessage: string;
}
const EnteringBox: React.FC<Props> = ({
  title,
  submitHandler,
  errorMessage,
}) => {
  const { status } = useSession();
  const router = useRouter();

  // const userNameRef = useRef<HTMLInputElement | null>(null);
  // const passwordRef = useRef<HTMLInputElement | null>(null);
  // const emailRef = useRef<HTMLInputElement | null>(null);
  // const errorMessageRef = useRef<HTMLSpanElement | null>(null);

  // if (errorMessage) {
  //   title === "ثبت‌نام" ? userNameRef.current?.focus() : null;
  //   emailRef.current?.focus();
  //   passwordRef.current?.focus();
  // }

  // function onSubmitHandler(e: React.FormEvent) {
  //   e.preventDefault();
  //   if (passwordRef.current?.value && emailRef.current?.value) {
  //     let user: IUser | null = null;
  //     if (userNameRef.current?.value && title === "ثبت‌نام") {
  //       user = {
  //         name: userNameRef.current?.value,
  //         password: passwordRef.current?.value,
  //         email: emailRef.current?.value,
  //         isAdmin: false,
  //       };
  //     } else {
  //       user = {
  //         password: passwordRef.current?.value,
  //         email: emailRef.current?.value,
  //       };
  //     }
  //     submitHandler(user);
  //     // userNameRef.current.changeValue('');
  //     // passwordRef.current.changeValue('');
  //     // emailRef.current.changeValue('');
  //   }
  // }
  const linkHref = title === "ورود" ? "ثبت‌نام" : "ورود";

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
        <button
          className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
          onClick={() => signIn()}
        >
          <Image
            src="/google.png"
            alt="google logo"
            width={20}
            height={20}
            className="object-contain"
          />
          <span>ورود با حساب گوگل</span>
        </button>
      </div>
      <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
        <h2 className="text-lg md:text-2xl font-bold">{title}</h2>
        <p className="mt-4 mb-2">
          {title === "ورود" ? (
            <>
              <br />
              <span className="inline-block text-palette-mute dark:text-palette-base/80 text-[12px] mt-2 bg-palette-fill p-2">
                .برای بررسی قالب میتونید علاوه بر ثبت‌نام از اطلاعات اکانت تست
                هم استفاده کنید (نام کاربری:test@info.com - رمز عبور:123456)
              </span>
            </>
          ) : null}
        </p>
        {/* <form onSubmit={onSubmitHandler}>
          <div className="mt-8">
            {title === "ثبت‌نام" ? (
              <Input
                ref={userNameRef}
                type="text"
                id="userName"
                placeholder="نام کاربری خود را وارد کنید"
                required={true}
              />
            ) : null}

            <Input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="ایمیل خود را وارد کنید"
              required={true}
              title={title === "ورود" ? "test@info.co" : undefined}
            />

            <Input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="رمز عبور خود را وارد کنید"
              title={title === "ورود" ? "123456" : undefined}
              required={true}
            />
          </div>
          {errorMessage && (
            <span
              ref={errorMessageRef}
              className="text-rose-600 block -mt-4 mb-4"
            >
              {errorMessage}
            </span>
          )}

          <button
            type="submit"
            className="bg-palette-primary w-full py-4 rounded-lg text-palette-side text-xl shadow-lg"
          >
            {linkHref === "ورود" ? "ثبت‌نام در فروشگاه" : "ورود به فروشگاه"}
          </button>
        </form> */}
        <Link
          href={linkHref === "ورود" ? "/login" : "/signup"}
          className="block my-4"
        >
          <span className="text-sm text-palette-mute">
            {title === "ورود"
              ? " هنوز حساب کاربری ندارید؟"
              : "حساب کاربری دارید؟"}
          </span>
          <span className="text-cyan-500">{` ${linkHref}`}</span>
        </Link>
      </div>
    </div>
  );
};

export default EnteringBox;
