import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_URI } from "../api/api";
import { authUser } from "../redux/user";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsLoading(true);
    const response = await fetch(`${API_URI}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else {
      localStorage.setItem("anonymous", JSON.stringify(data));
      dispatch(authUser(data));
      setIsLoading(false);
      setError(null);
      navigate("/");
    }
  };

  return { login, isLoading, error };
};
