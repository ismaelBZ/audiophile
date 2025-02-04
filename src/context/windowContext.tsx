import {createContext, useContext} from "react";

type WindowContext_T = {
    width: number,
    media: string
}

export const WindowContext = createContext<WindowContext_T | undefined>(undefined);

export const useWindowContext = () =>{
    const windowContext = useContext(WindowContext);
    
    if (windowContext == undefined) {
        throw new Error("Failed to obtain window properties trought Context API");
    }

    return windowContext;
}
