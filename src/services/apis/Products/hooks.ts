import { useQuery } from "react-query";
import { fetchAllProducts } from "./api";

export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["useFetchAllProducts"],
    queryFn: () => fetchAllProducts(),
  });
};
