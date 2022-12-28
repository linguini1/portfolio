import { useState, useEffect } from "react";
import auth from "../assets/auth.json";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `token ${auth.Authentication}`,
      },
    })
      .then((response) => response.json())
      .then((response_data) => {
        setData(response_data);
        setLoading(false);
      });
  }, []);

  return [data, loading];
};
