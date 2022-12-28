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
