import { useState } from 'react';
import { useCartContext } from '../../../../context/cartContext';
import Button from "../../../utils/buttons/Primary";
import { CartItem_T } from '../../../../types/CartItem_T';
import { formatPrice } from '../../../../Utils/utils';

const item: CartItem_T = {
    thumbUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/thumb.png?updatedAt=1737456762936",
    thumbName: "xx99 MK II",
    price: 2999,
    priceFormatted: formatPrice(2999),
    quantity: 0,
}

export const CartCard = () => {
    const [cartItem, setCartItem] = useState<CartItem_T>(item)
    const { cartList } = useCartContext()

    const decreaseQuantity = () => {
        setCartItem((prev) => {
            const newQuantity = prev.quantity == 0 ? 0 : prev.quantity - 1;
            return {
                ...prev,
                quantity: newQuantity
            };
        })
    }

    const increaseQuantity = () => {
        setCartItem((prev) => ({
            ...prev,
            quantity: prev.quantity + 1
        }))
    }

    return (
        <div className="w-[90%] max-w-[320px] mx-auto px-7 py-8 flex flex-col gap-8 bg-white rounded-lg md:w-[420px] ">
            {/* Cart Header */}
            <div className="flex justify-between">
                <p className="uppercase font-bold text-[18px]">Cart <span>({cartList && cartList.length})</span></p>
                <button className="text-[15px] text-gray underline">Remove all</button>
            </div>
            {/* Items List */}
            <ul>
                {cartList &&
                    cartList.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center justify-between">
                                {/* Thumb & Name + Price */}
                                <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
                                    {/* Thumb */}
                                    <div className="w-[56px] sm:w-[64px] p-[10px] aspect-square flex items-center justify-center bg-ice rounded-md">
                                        <img src={item.thumbUrl} alt="" />
                                    </div>
                                    {/* Name & Price */}
                                    <div>
                                        {/* Product Name */}
                                        <p className="font-bold uppercase text-[15px]">{item.thumbName}</p>
                                        {/* Price */}
                                        <p className='font-bold text-[14px] text-gray'>{item.priceFormatted}</p>
                                    </div>
                                </div>
                                {/* Quantity */}
                                <div className="flex bg-ice items-center">
                                    <button className="px-[4px] sm:px-[11px] py-[7px]" onClick={decreaseQuantity}>-</button>
                                    <p className="mx-2">{item.quantity}</p>
                                    <button className="px-[4px] sm:px-[11px] py-[7px]" onClick={increaseQuantity}>+</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {/* Total */}
            <div className="flex justify-between">
                <p className="uppercase font-medium text-[15px] text-gray">Total</p>
                <p className="font-bold text-[18px]">$ {cartList &&
                    cartList.reduce((acc, item) => {
                        return acc += item.price * item.quantity
                    }
                        , 0)}
                </p>
            </div>
            {/* Checkout button */}
            <div className="-mt-2">
                <Button className="w-full">Checkout</Button>
            </div>

        </div>
    )
}

