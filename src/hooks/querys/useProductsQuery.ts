import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../utils/fetchData";
import { useEffect } from "react";
import queryClient from "../../lib/queryClient";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const useProductQuery = (path: string) => {
    const URL = `${BASE_URL}${path}`;

    const query = useQuery({
        queryKey: ["product"],
        queryFn: () => fetchData(URL),
        staleTime: 0,
        // refetchOnMount: true,
        // refetchOnWindowFocus: true,
    });
    
    return query; 
} 
