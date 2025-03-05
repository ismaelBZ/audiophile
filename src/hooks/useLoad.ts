import { useCallback, useEffect } from "react"

export const useLoad = () => {
    const scrollToTop = useCallback(() => {
        window.scrollTo(0,0);
    }, [])
    
    useEffect(() => {
        scrollToTop();
    }, [scrollToTop])
}