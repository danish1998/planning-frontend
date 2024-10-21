import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export const apiCall = async <R, D = {}>(
  method: "get" | "post" | "patch" | "delete" | "put",
  url: string,
  data?: D
): Promise<R> => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      if (
        err.response.data.success === true ||
        err.response.data.success === false
      ) {
        toast.error(err.response.data.message);
        return err.response.data;
      } else {
        toast.error("No Response From Server");
        return {
          success: false,
          message: "No Response From Server",
        } as R;
      }
    } else {
      toast.error("No Response From Server");
      return {
        success: false,
        message: "No Response From Server",
      } as R;
    }
  }
};
