"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
// import type { NextPage } from "next";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import jsCookie from "js-cookie";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { TUser, TUserInfoRootState } from "@/types/user ";
// import { userInfoActions } from "@/store/user-slice ";
// import { getError } from "@/utilities/error ";
// import EnteringBox from "@/components/entering/EnteringBox ";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div>
      <button
        className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
        onClick={() => signIn("google")}
      >
        <Image
          src="/google.png"
          alt=""
          width={20}
          height={20}
          className="object-contain"
        />
        <span>با حساب گوگل خود وارد شوید</span>
      </button>
    </div>
  );

  // const dispatch = useDispatch();
  // const router = useRouter();
  // const [errorMessage, setErrorMessage] = useState("");
  // const userInfo = useSelector((state: TUserInfoRootState) => {
  //   return state.userInfo.userInformation;
  // });
  // useEffect(() => {
  //   if (userInfo) {
  //     router.push("/");
  //   }
  // }, [userInfo, router]);
  // async function LoginHandler(user: TUser) {
  //   const { email, password } = user;
  //   try {
  //     const { data } = await axios.post("/api/users/login", {
  //       email,
  //       password,
  //     });
  //     dispatch(userInfoActions.userLogin(data));
  //     jsCookie.set("userInfo", JSON.stringify(data));
  //     router.push("/");
  //   } catch (err: any) {
  //     setErrorMessage(getError(err));
  //     console.log(getError(err));
  //   }
  // }
  // return (
  //   <EnteringBox
  //     title="login"
  //     submitHandler={LoginHandler}
  //     errorMessage={errorMessage}
  //   />
  // );
};

export default Login;
