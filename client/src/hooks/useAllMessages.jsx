import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../redux/messages";
import { API_URI } from "../api/api";

export const useMessages = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const viewAllMessages = async (URI) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch(`${API_URI}/${URI}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else {
      setIsLoading(null);
      setError(null);
      dispatch(setMessages(data));
    }
  };

  return { viewAllMessages, isLoading, error };
};
