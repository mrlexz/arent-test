import { useState } from "react";
import { delay } from "../utils";

const useLoadMore = (fetchMore: () => void) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await delay(1500);
    fetchMore();
    setIsLoading(false);
  };

  return { fetchData, isLoading };
};

export default useLoadMore;
