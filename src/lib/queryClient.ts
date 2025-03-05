import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                staleTime: Infinity,
                refetchOnMount: false,
                // refetchOnReconnect: false,
                // refetchOnWindowFocus: false
            }
        }
    }
);

export default queryClient;