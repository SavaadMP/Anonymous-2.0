import { useState } from "react";
import { API_URI } from "../api/api";

export const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getSingleUser = async (userId) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch(`${API_URI}/getSingleUser/` + userId);

    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setIsLoading(false);
    } else {
      setIsLoading(null);
      setError(null);
      return data;
    }
  };

  return { getSingleUser, isLoading, error };
};
