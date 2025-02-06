import {useState, useEffect} from "react"
import { SharedContext } from "./sharedContext";
import { SharedData_T } from "../types/context/SharedData_T";
import { CartContext } from "./cartContext";
import { CartItem_T } from "../types/CartItem_T";
import { WindowContext } from "./windowContext";
import { NavegationHistoryContext } from "./navegationsHistoryContext";

export const AppProvider = ({children, sharedData} : {children: React.ReactNode, sharedData: SharedData_T}) => {
    const [width, setWidth] = useState(window.innerWidth);                  // Window Context

    const [cartList, setCartList] = useState<CartItem_T[] | null>(null)     // CartList Context
    const [modalHeight, setModalHeight] = useState(0);                      // Cart List Context
    const [isShowingCart, setIsShowingCart] = useState(false);              // Cart List Context

    const [navegationHistory, setNavegationHistory] = useState<string[]>(new Array())           // NavegationContext


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


    {/* Cart List */}
    useEffect(() => {
        getModalHeight();
        window.addEventListener('resize', getModalHeight); // handle background height
        window.addEventListener('click', closeCart);
        document.documentElement.style.scrollbarGutter = "stable"

        if(isShowingCart) {
            document.body.style.position = "fixed"; // Turn body background fixed when cart is openned
        }
        
        return () => {
            window.removeEventListener('resize', getModalHeight)
            window.removeEventListener('click', closeCart)
            document.body.style.position = "static";
        }
    }, [isShowingCart]);

    const getModalHeight = () => {
        const header = document.querySelector('header');
        const headerHeight = parseInt(window.getComputedStyle(header!, null).getPropertyValue('height'))
        const windowHeight = window.innerHeight;
        const modalHeight = windowHeight-headerHeight;
        setModalHeight(modalHeight);
    }

    const openCart = () => {
        setIsShowingCart((prev) => !prev);
    }

    const closeCart = (e: Event) => {
        const cartBackground = document.getElementById("cartBackground");
        if (e.target == cartBackground) {
            setIsShowingCart(false);
        }
        return;
    }

    const handleHistory = (url: string) => {
        if (url == navegationHistory[navegationHistory.length - 1]) {
            return;
        } else {
            setNavegationHistory((prev) => [...prev, url]); 
        }
        console.log(navegationHistory);
    }

    
    return (
        <>
            <SharedContext.Provider value={sharedData}>
                <WindowContext.Provider value={{width, media}}>
                    <CartContext.Provider value={{cartList, setCartList, openCart, closeCart, isShowingCart, setIsShowingCart, modalHeight}}>
                        <NavegationHistoryContext.Provider value={{navegationHistory, setNavegationHistory, handleHistory}}>
                            {children}
                        </NavegationHistoryContext.Provider>
                    </CartContext.Provider>
                </WindowContext.Provider>
            </SharedContext.Provider>
        </>
    )

}