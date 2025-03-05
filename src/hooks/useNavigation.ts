import { useStore } from "../stores/useStore";

export const useNavigation = () => {
    const history = useStore((state) => state.navigationHistory);
    const setNavigationHistory = useStore((state) => state.setNavigationHistory);
    const cutHistory = useStore((state) => state.cutHistory);
    const path = window.location.pathname;
    if (path !== history[history.length - 1]) setNavigationHistory(path);
    if (history.length > 50) cutHistory();
}
