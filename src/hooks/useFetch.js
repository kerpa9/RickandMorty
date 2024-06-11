import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [hasError, setHasError] = useState();
  const getApi = (url) => {
    axios
      .get(url)
      .then((res) => {
        setHasError(false);
        setApiData(res.data);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  };
  return [apiData, getApi, isLoading, hasError];
};

export default useFetch;
