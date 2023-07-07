import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URI } from "../api/api";

export const useSendMessage = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const sendMsg = async (usercode, type, message) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch(`${API_URI}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usercode, type, message }),
    });
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else {
      setIsLoading(null);
      navigate("/msg_success");
    }
  };

  return { sendMsg, isLoading, error };
};
