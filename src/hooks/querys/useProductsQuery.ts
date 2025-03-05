import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../utils/fetchData";
import { useParams } from "react-router";
import { useEffect } from "react";
import queryClient from "../../lib/queryClient";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const useProductQuery = () => {
    const {category, id} = useParams();
    const URL = `${BASE_URL}/${category}/${id}?t=${Date.now()}`;

    const query = useQuery({
        queryKey: ["product", category, id],
        queryFn: () => fetchData(URL),
        refetchOnMount: "always"
    });

    useEffect(() => {
        queryClient.invalidateQueries({queryKey: ["product"]})
    }, [category, id]);
    
    return query; 
        
} 
