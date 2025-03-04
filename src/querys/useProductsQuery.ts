import {useQuery} from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData";
import { useParams } from "react-router";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const useProductQuery = () => {
    const pathParam = useParams();
    const URL = BASE_URL + "/" + pathParam?.category + "/" + pathParam?.id;

    return (
        useQuery({
            queryKey: ["product"],
            queryFn: () => fetchData(URL),
            refetchOnMount: true
        })
    )
} 
