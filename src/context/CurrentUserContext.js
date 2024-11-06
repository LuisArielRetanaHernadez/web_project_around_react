import { createContext } from "react";

export const CurrentUserContext = createContext({
  _id: null,
  name: null,
  email: null,
  avatar: null,
});