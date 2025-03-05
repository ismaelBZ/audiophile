import { useEffect } from "react";
import { useStore } from "../stores/useStore";

export const useDevice = () => {
    const setWindowWidth = useStore((state) => state.setWindowWidth);
    const setDeviceType = useStore((state) => state.setDeviceType)

    useEffect(() => {
        handleDeviceProperties();
        window.addEventListener('resize', handleDeviceProperties)
    })

    const handleDeviceProperties = () => {
        const width = window.innerWidth;
        const media = (() => {
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
                media = "wideScreen"
            }
            return media;
        })();
        setWindowWidth(width);
        setDeviceType(media);
    }
}
