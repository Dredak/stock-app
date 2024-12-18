import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      setIsFetching(false);
      setData(json);
      setError(null);
    } catch (error) {
      setError(`${error} Could not Fetch Data `);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, error, isFetching, refetch };
};
