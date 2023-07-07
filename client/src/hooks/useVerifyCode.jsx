import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URI } from "../api/api";

export const useVerifyCode = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const verifyUserCode = async (usercode) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(`${API_URI}/verifyUserCode/` + usercode, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      setIsLoading(null);
      navigate("/sendMessage/" + usercode);
    }
  };

  return { verifyUserCode, error, isLoading };
};
