import {useState, useEffect} from "react"
import { SharedData_T } from "../types/context/SharedData_T";
import { WindowContext } from "./windowContext";
import { NavegationHistoryContext } from "./navegationsHistoryContext";

export const AppProvider = ({children, sharedData} : {children: React.ReactNode, sharedData: SharedData_T}) => {
    const [width, setWidth] = useState(window.innerWidth);                  // Window Context

    const [navegationHistory, setNavegationHistory] = useState<string[]>(new Array("/"))           // NavegationContext


    {/* Window Context */}
    useEffect(() => {
        handleDeviceWidth();
        window.addEventListener('resize', handleDeviceWidth)

        return (() => window.removeEventListener('resize', handleDeviceWidth))
    }, []);

    const handleDeviceWidth = () => {
        setWidth(window.innerWidth);
    }
    const media = (function detectMedia() {
        let media = ""
        if (width < 768) {
            media = 'mobile';
        } else if (width < 1024) {
            media = "tablet";
        } else if (width < 1280) {
            media = "laptop"
        } else if (width < 1440) {
            media = "desktop"
        } else {
            media = "wide"
        }
        return media;
    })();



    const handleHistory = (url: string) => {
        setNavegationHistory((prev) => {
            if (url == prev[prev.length - 1]) {
                return prev;
        } else 
            if (prev.length <= 30) {
                const newHistory = [...prev, url]
                return newHistory;
        } else {
            let newHistory = prev.slice(1);
            newHistory = [...newHistory, url];
            return newHistory
        }
    }); 
}
    
    
    
    return (
        <>
            <WindowContext.Provider value={{width, media}}>
                    <NavegationHistoryContext.Provider value={{navegationHistory, setNavegationHistory, handleHistory}}>
                        {children}
                    </NavegationHistoryContext.Provider>
            </WindowContext.Provider>
        </>
    )

}