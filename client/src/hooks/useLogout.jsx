import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("Anonymous");
    dispatch(logoutUser(null));
  };

  return { logout };
};
