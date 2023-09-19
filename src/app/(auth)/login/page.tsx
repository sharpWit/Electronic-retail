"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import jsCookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "@/store/user-slice ";
import { getError } from "@/utilities/error ";
import EnteringBox from "@/components/entering/EnteringBox ";
import { IUser, IUserInfoRootState } from "@/types/user ";

const Login: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const userInfo = useSelector((state: IUserInfoRootState) => {
    return state.userInfo.userInformation;
  });
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);

  async function LoginHandler(user: IUser) {
    const { email, password } = user;
    try {
      const { data } = await axios.post("/api/auth/[...nextauth]", {
        email,
        password,
      });
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err: any) {
      setErrorMessage(getError(err));
      console.log(getError(err));
    }
  }
  return (
    <EnteringBox
      title="ورود"
      submitHandler={LoginHandler}
      errorMessage={errorMessage}
    />
  );
};

export default Login;
