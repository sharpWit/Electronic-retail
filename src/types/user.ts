export type TUser = {
  _id?: any;
  name?: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  token?: string;
};

export type TUserInfo = {
  userInformation: TUser | null;
};

// RootState type => used for state type in useSelector hook

export type TUserInfoRootState = {
  userInfo: TUserInfo;
};
