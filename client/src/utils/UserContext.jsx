import { createContext } from "react";

export const UserContext = createContext({
  theme: "light",
  isAuth: false,
  setAuth: () => {},
});
