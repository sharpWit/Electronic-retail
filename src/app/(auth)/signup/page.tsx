import type { NextPage } from "next";
// import { useDispatch, useSelector } from "react-redux";
// import jsCookie from "js-cookie";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { IUser, IUserInfoRootState } from "@/types/user ";
// import { userInfoActions } from "@/store/user-slice ";
// import { getError } from "@/utilities/error ";
// import EnteringBox from "@/components/entering/EnteringBox ";
import SignUpForm from "@/components/form/SignUpForm ";
const SignUp: NextPage = () => {
  //   const { redirect } = router.replace;
  // const userInfo = useSelector(
  //   (state: IUserInfoRootState) => state.userInfo.userInformation
  // );
  //   useEffect(() => {
  //     if (userInfo) {
  //       router.push((redirect as string) || "/");
  //     }
  //   }, [userInfo, redirect, router]);
  // async function signUpHandler(user: IUser) {
  //   const { name, email, password } = user;
  //   try {
  //     const { data } = await axios.post("/api/auth/signup", {
  //       name,
  //       email,
  //       password,
  //     });
  //     dispatch(userInfoActions.userLogin(data));
  //     jsCookie.set("userInfo", JSON.stringify(data));
  //     router.push("/");
  //   } catch (err: any) {
  //     if (err.response.data.status == 500) {
  //       dispatch(userInfoActions.userLogin(user));
  //       jsCookie.set("userInfo", JSON.stringify(user));
  //     }
  //     setErrorMessage(getError(err));
  //     console.log(getError(err));
  //     // router.push("/");
  //   }
  // }
  return (
    // <EnteringBox
    //   title="ثبت‌نام"
    //   submitHandler={signUpHandler}
    //   errorMessage={errorMessage}
    // />
    <SignUpForm />
  );
};

export default SignUp;
