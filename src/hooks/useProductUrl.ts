import { useStore } from "../stores/useStore";

export const useSetProductUrl = (url) => {
    const setProductUrl = useStore((state) => state.setProductUrl);
    setProductUrl(url);
}