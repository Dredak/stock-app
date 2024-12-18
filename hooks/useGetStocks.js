import { API_KEY, BASE_URL, STOCKS } from "../config/api";
import { useFetch } from "./useFetch";

const useGetStocks = () => {
  const { data, error, isFetching, refetch } = useFetch(
    `${BASE_URL}${STOCKS}&token=${API_KEY}`
  );

  return { data, error, isFetching, refetch };
};
export default useGetStocks;
