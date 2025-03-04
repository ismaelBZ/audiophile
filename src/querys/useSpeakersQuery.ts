import {useQuery} from "@tanstack/react-query";
import {fetchData} from "../utils/fetchData";

const URL = import.meta.env.VITE_SPEAKERS_URL;

export const useSpeakersQuery = () => useQuery({
    queryKey: ["speakers"],
    queryFn: () => fetchData(URL)
})