import {useQuery} from "@tanstack/react-query";
import {fetchData} from "../utils/fetchData";

const URL = import.meta.env.VITE_ABOUTUS_URL

export const useAboutUsQuery = () => useQuery({
    queryKey: ["aboutUs"],
    queryFn: () => fetchData(URL)
})