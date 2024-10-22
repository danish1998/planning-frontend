import { useMutation, useQueryClient } from "react-query";
import { getCategoryProductsApi, getSearchProductsApi } from "./api";
import toast from "react-hot-toast";

export const useMutateGetSearchResults = (onSuccess: (data: any) => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["searchProductResultApi"],
    mutationFn: (payload: any) => getSearchProductsApi(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["CategoryProductResultApi"]);
      onSuccess(data);
    },
  });
};

export const useMutateGetCategoryResults = (onSuccess: (data: any) => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["CategoryProductResultApi"],
    mutationFn: (payload: any) => getCategoryProductsApi(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["searchProductResultApi"]);
      onSuccess(data);
    },
  });
};
