import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/user";
import { API_URI } from "../api/api";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = async (
    username,
    usercode,
    email,
    password,
    confirmPassword
  ) => {
    setIsLoading(true);

    const response = await fetch(`${API_URI}/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        usercode,
        email,
        password,
        confirmPassword,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      localStorage.setItem("anonymous", JSON.stringify(data));
      dispatch(authUser(data));
      setIsLoading(null);
      navigate("/");
    }
  };

  return { register, error, isLoading };
};
