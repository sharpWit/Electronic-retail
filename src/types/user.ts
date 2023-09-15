export interface IUser {
  _id?: any;
  name?: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  token?: string;
}

export interface IUserInfo {
  userInformation: IUser | null;
}

// RootState interface => used for state interface in useSelector hook

export interface IUserInfoRootState {
  userInfo: IUserInfo;
}
