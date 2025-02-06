import { useCartContext } from "../../../context/cartContext"
import { CartCard } from "./Card/CartCard"

const Cart = () => {
    const {modalHeight} = useCartContext();

    return (
        <div className="fixed w-full z-30">
            <div className="grid grid-cols-1 grid-rows-1 md:justify-items-end 2xl:justify-center">
                {/* Background modal */}
                <div id="cartBackground"
                    className="col-start-1 col-end-1 row-start-1 row-end-1
                        bg-green-600 w-full opacity-30
                    "
                    style={{height: modalHeight}}  
                ></div>
                <div className="col-start-1 col-end-1 row-start-1 row-end-1 2xl:w-[1110px] 2xl:mx-auto">
                    <div className="relative md:pr-10 xl:pr-20 2xl:p-0 2xl:float-right z-10">
                        <CartCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart