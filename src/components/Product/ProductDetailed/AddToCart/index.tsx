import Button from "./../../../utils/buttons/AddToCart";
import { act, useState } from "react";
import { formatPrice } from "../../../../utils/formatPrice";
import { CartItem_T } from "../../../../types/CartItem_T";
import { Product_T } from "../../../../types/Product_T";
import { useStore } from "../../../../stores/useStore";
import Quantity from "./Quantity";

const AddToCart = ({product}: {product: Product_T}) => {
    const addToCart = useStore((state) => state.addToCart);
    const activeProduct = useStore((state) => state.activeProduct);
    const setActiveProduct = useStore((state) => state.setActiveProduct);


    const handleQuantity = (operation: 'increase' | 'decrease') => {
        let quantity = activeProduct.quantity
        quantity = operation == 'increase' 
            ? quantity + 1 
            : quantity > 0 
                ? quantity - 1 
                : 0
        setActiveProduct({...activeProduct, quantity});
    }


    const handleCartList = () => {
        if (activeProduct.quantity < 1) {
            return;
        } else {
            addToCart(activeProduct)
        }
    }


    return (
        <div className="flex gap-4">
            <Quantity quantity={activeProduct.quantity} handleQuantity={handleQuantity} />
            <Button onClick={handleCartList}>Add to Cart</Button>
        </div>
    )
}

export default AddToCart