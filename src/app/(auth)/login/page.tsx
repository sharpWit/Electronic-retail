"use client";

// import axios from "axios";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import jsCookie from "js-cookie";
// import { IUser, IUserInfoRootState } from "@/types/user ";
import { userInfoActions } from "@/store/user-slice ";
// import { getError } from "@/utilities/error ";
// import EnteringBox from "@/components/entering/EnteringBox ";
import SignInForm from "@/components/form/SignInForm ";
import { IUser } from "@/types/user ";

const Login: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  // const userInfo = useSelector((state: IUserInfoRootState) => {
  //   return state.userInfo.userInformation;
  // });

  // useEffect(() => {
  //   if (userInfo) {
  //     router.push("/");
  //   }
  // }, [userInfo, router]);

  // async function LoginHandler(user: IUser) {
  //   const { email, password } = user;
  //   try {
  //     const { data } = await axios.post("/api/auth/signin", {
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

  useEffect(() => {
    async function signInHandler() {
      if (session) {
        try {
          const userInfo: IUser = session.user; // Access user information
          dispatch(userInfoActions.userLogin(userInfo));
          jsCookie.set("userInfo", JSON.stringify(userInfo));
          router.push("/");
        } catch (err) {
          console.error(err);
        }
      }
    }

    signInHandler();
  }, [session, dispatch, router]);

  return (
    // <EnteringBox
    //   title="ورود"
    //   // submitHandler={LoginHandler}
    //   errorMessage={errorMessage}
    // />
    <SignInForm />
  );
};

export default Login;
