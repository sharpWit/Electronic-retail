import { TUser } from "@/types/user ";
// import jwt from "jsonwebtoken";

export const signToken = (user: TUser) => {
  return jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};
