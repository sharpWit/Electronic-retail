import type { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import jsCookie from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "@/store/user-slice ";
import { getError } from "@/utilities/error ";
import EnteringBox from "@/components/entering/EnteringBox ";
import { IUser, IUserInfoRootState } from "@/types/user ";

const SignUp: NextPage = () => {
  const dispatch = useDispatch();
  const params = useSearchParams();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const redirect = params.get("query");
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );
  useEffect(() => {
    if (userInfo) {
      router.push((redirect as string) || "/");
    }
  }, [userInfo, redirect, router]);
  async function signUpHandler(user: IUser) {
    const { name, email, password } = user;
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err: any) {
      /* sanity.io is boycott for the people from Iran so I set cookies for whom don't use VPN in Iran*/
      if (err.response.data.status == 500) {
        dispatch(userInfoActions.userLogin(user));
        jsCookie.set("userInfo", JSON.stringify(user));
      }
      setErrorMessage(getError(err));
      console.log(getError(err));
      // router.push("/");
    }
  }
  return (
    <EnteringBox
      title="signUp"
      submitHandler={signUpHandler}
      errorMessage={errorMessage}
    />
  );
};

export default SignUp;
