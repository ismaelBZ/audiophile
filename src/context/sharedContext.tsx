import {createContext, useContext} from "react";
import { SharedData_T } from "../types/context/SharedData_T";

export const SharedContext = createContext<SharedData_T | undefined>(undefined);

export const useSharedData = () => {
    const sharedContext = useContext(SharedContext);

    if (sharedContext == undefined) {
        throw new Error ("Failled to get data trought Context API ")
    }
    return sharedContext;
}

