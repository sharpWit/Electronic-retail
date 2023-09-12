import { useSelector } from "react-redux";
import { TUserInfoRootState } from "@/types/user ";
import UserAccountBtn from "./UserAccountBtn";
import LoginBtn from "./LoginBtn";

const User = () => {
  const userInfo = useSelector(
    (state: TUserInfoRootState) => state.userInfo.userInformation
  );
  return <div>{userInfo ? <UserAccountBtn /> : <LoginBtn />}</div>;
};

export default User;
