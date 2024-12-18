import { API_KEY, BASE_URL, STOCK_DETAILS } from "../config/api";
import { useFetch } from "./useFetch";

const useGetStockDetails = (stockSymbol) => {
  const { data, error, isFetching, refetch } = useFetch(
    `${BASE_URL}${STOCK_DETAILS}${stockSymbol}&token=${API_KEY}`
  );

  return { data, error, isFetching, refetch };
};
export default useGetStockDetails;
