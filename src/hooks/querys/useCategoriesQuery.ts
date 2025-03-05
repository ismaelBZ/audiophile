import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../utils/fetchData";

const URL = import.meta.env.VITE_CATEGORIES_URL

export const useCategoriesQuery = () => useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchData(URL)
})