import {useQuery} from "@tanstack/react-query";
import { fetchData } from "../../utils/fetchData";

const URL = import.meta.env.VITE_EARPHONES_URL;

export const useEarphonesQuery = () => useQuery({
    queryKey: ["earphones"],
    queryFn: () => fetchData(URL)
})