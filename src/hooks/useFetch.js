import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `token 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`,
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
