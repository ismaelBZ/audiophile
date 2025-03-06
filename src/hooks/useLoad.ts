import { useEffect } from "react"

export const useLoad = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
}