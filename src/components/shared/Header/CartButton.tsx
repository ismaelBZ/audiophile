// Hooks
import { useStore } from "../../../stores/useStore";
// Images
import cartIcon from "./../../../assets/header/icon-cart.svg" 

export const CartButton = ({isShowingCart} : {isShowingCart: boolean}) => {
    const cartList = useStore((state) => state.cartList);
    const openCart = useStore((state) => state.openCart);
    const closeCart = useStore((state) => state.closeCart);

    const cartItemsQuantity = cartList.reduce((acc, act) => {
        return acc + act.quantity;
    },0)

    return (
        <button aria-label="Open cart" onClick={isShowingCart ? closeCart : openCart}>
            <div className="relative">

                <img src={cartIcon} alt="" />

                {cartItemsQuantity > 0 &&
                    <div className="absolute -top-[15px] -right-[16px] px-[8px] bg-peru rounded-full">
                        <p className="text-[14px] text-white">
                            {cartItemsQuantity}
                        </p>
                    </div>
                }

            </div>
        </button>
    )
}