import {createContext, useContext} from "react";
import { AboutUs_T } from "../../types/shared/AboutUs_T";
import { Category_T } from "../../types/shared/Category_T";

type Shared_T = {
    aboutUs: AboutUs_T,
    categories: Category_T
}

export const SharedContext = createContext<Shared_T | undefined>(undefined);

export const useSharedData = () => {
    const sharedContext = useContext(SharedContext);

    if (sharedContext == undefined) {
        throw new Error ("Failled to get data trought Context API ")
    }
    return sharedContext;
}
// export function useSharedContext () {
//     const exemple = useContext(context);

//     if (exemple == undefined ) {
//         throw new Error("Failled to get About Us data trought Context API")
//     } 

//     return exemple;
// }