import { getAllProducts } from "../../apiRoutes";
import { apiCall } from "../../axiosFactory";

export const fetchAllProducts = async () => {
  const data = await apiCall("get", `${getAllProducts}`);
  return data;
};
