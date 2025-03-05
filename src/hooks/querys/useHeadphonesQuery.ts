import {useQuery} from "@tanstack/react-query";
import { fetchData } from "../../utils/fetchData";

const URL = import.meta.env.VITE_HEADPHONES_URL;

export const useHeadphonesQuery = () => useQuery({
    queryKey: ["headphones"],
    queryFn: () => fetchData(URL)
})