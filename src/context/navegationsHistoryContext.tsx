import { createContext, useContext } from "react";

export const NavegationHistoryContext = createContext<{navegationHistory: string[], setNavegationHistory: React.Dispatch<React.SetStateAction<string[]>>, handleHistory: (url: string) => void} | null>(null);

export const useNavegationHistoryContext = () => {
    const navegationHistoryContext = useContext(NavegationHistoryContext);

    if (navegationHistoryContext == null) {
        throw new Error("Failed to get navegation history through Context API")
    }

    return navegationHistoryContext;
}