import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("anonymous");
    dispatch(logoutUser(null));
    navigate("/login");
  };

  return { logout };
};
