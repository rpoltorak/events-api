import { login, register } from "./user.controller";

export const userRoutes = [
  {
    path: "/register",
    method: "post",
    action: register
  },
  {
    path: "/login",
    method: "post",
    action: login
  }
];
