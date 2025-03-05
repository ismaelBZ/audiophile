// Hooks
import { useState, useEffect } from "react";
import { useStore } from "../../../stores/useStore";
// Components
import { CartCard } from "./Card/CartCard"

const Cart = () => {
    const [modalHeight, setModalHeight] = useState(0)
    const close = useStore((state) => state.closeCart)
    
    useEffect(() => {
        getModalHeight();
        document.body.style.position = "fixed";
        document.body.style.overflowY = "visible";
        
        window.addEventListener('resize', getModalHeight);
        window.addEventListener('click', closeCart);
        
        return () => {
            window.removeEventListener('click', closeCart)
            window.removeEventListener('resize', getModalHeight)
            document.body.style.position = "static";
            document.body.style.overflowY = "auto";
        }
    }, [])


    const getModalHeight = () => {
        const header = document.querySelector('header');
        const headerHeight = parseInt(window.getComputedStyle(header!, null).getPropertyValue('height'))
        const windowHeight = window.innerHeight;
        const modalHeight = windowHeight-headerHeight;
        setModalHeight(modalHeight);
    }


    const closeCart = (e: Event) => {
        const cartBackground = document.getElementById("cartBackground");
        if (e.target == cartBackground) {
            close();
        }
        return;
    }


    return (
        <div className="fixed w-full z-30">
            <div className="grid grid-cols-1 grid-rows-1 md:justify-items-end 2xl:justify-center">
                {/* Background modal */}
                <div id="cartBackground"
                    className="col-start-1 col-end-1 row-start-1 row-end-1
                        bg-black w-full opacity-30
                    "
                    style={{height: modalHeight}}  
                ></div>
                <div className="col-start-1 col-end-1 row-start-1 row-end-1 2xl:w-[1110px] 2xl:mx-auto">
                    <div className="relative mt-[20px] md:pr-10 xl:pr-20 2xl:p-0 2xl:float-right z-10">
                        <CartCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart