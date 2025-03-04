import {useQuery} from "@tanstack/react-query";
import {fetchData} from "../utils/fetchData";

const URL = import.meta.env.VITE_HOME_URL;

export const useHomeQuery = () => useQuery({
    queryKey: ["home"],
    queryFn: () => fetchData(URL)
});