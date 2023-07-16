import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authUser } from "../redux/user";
import { API_URI } from "../api/api";

export const useUpdateProfile = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateProfile = async (username, email, usercode) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${API_URI}/updateProfile/${user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        username,
        email,
        usercode,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      dispatch(authUser(data));
      setIsLoading(null);
      navigate("/");
    }
  };

  return { error, isLoading, updateProfile };
};
