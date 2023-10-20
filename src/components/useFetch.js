import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Could not fetch the resources, check the endpoints");
        }

        const responseData = await response.json();
        setData(responseData.data);
        console.log(responseData.data);
        setIspending(false);
        setError(null);
      } catch (err) {
        setIspending(false);
        setError(err.message);
      }
    };

    fetchData(); // Fetch data immediately
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
