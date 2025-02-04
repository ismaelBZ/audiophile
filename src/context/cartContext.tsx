import {useContext, createContext} from "react";
import {CartItem_T} from "../types/CartItem_T";

type CartContext_T = {
    cartList: CartItem_T[] | null
    setCartList: React.Dispatch<React.SetStateAction<CartItem_T[] | null>>
    isShowingCart: boolean,
    setIsShowingCart: React.Dispatch<React.SetStateAction<boolean>>
    openCart: () => void
    closeCart: (e: Event) => void
    modalHeight: number
}

export const CartContext = createContext<CartContext_T | undefined >(undefined);

export const useCartContext = () => {
    const cartContext = useContext(CartContext);

    if (cartContext == undefined){
        throw new Error("Failed to get data trought Context API")
    }

    return cartContext;
}
