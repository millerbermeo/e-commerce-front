import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://1sxzzrhd-3000.use2.devtunnels.ms/api/productos");
      return data;
    },
  });
