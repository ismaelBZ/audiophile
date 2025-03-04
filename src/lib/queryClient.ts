import { QueryClient } from "@tanstack/react-query";

const fifteenMinutes = 1000 * 60 * 15

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