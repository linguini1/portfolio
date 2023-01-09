import { useState, useEffect } from "react";

const ERROR_STRING = "API was rate limited.";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => handle_response_error(response))
      .then((response_data) => {
        if (response_data !== ERROR_STRING) {
          setLoading(false);
        }
        setData(response_data);
      });
  }, []);

  return [data, loading];
};

function handle_response_error(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    return ERROR_STRING;
  }
}
