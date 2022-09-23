import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response_data) => {
        setData(response_data);
        setLoading(false);
      });
  }, []);

  return [data, loading];
};
