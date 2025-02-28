import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/api/productos/comercio/2");
      return data;
    },
  });
