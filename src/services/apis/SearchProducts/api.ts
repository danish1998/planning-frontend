import { getCategoryProducts, getSearchedProducts } from "../../apiRoutes";
import { apiCall } from "../../axiosFactory";

export const getSearchProductsApi = async (payload: any) => {
  const data = await apiCall("get", `${getSearchedProducts}${payload}`);
  return data;
};

export const getCategoryProductsApi = async (payload: any) => {
  const data = await apiCall("get", `${getCategoryProducts}/${payload}`);
  return data;
};
