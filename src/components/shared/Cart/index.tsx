import {useState} from 'react';
import Button from "./../../utils/buttons/Primary";
import { CartItem } from '../../../types/CartItem_T';
import { formatPrice } from '../../../Utils/utils';

const item: CartItem = {
    thumbUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/thumb.png?updatedAt=1737456762936",
    thumbName: "xx99 MK II",
    price: 2999,
    priceFormatted: formatPrice(2999),
    quantity: 0,
}

const Cart = () => {
    const [cartItem, setCartItem] = useState<CartItem>(item)

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
        <div className="px-7 py-8 max-w-[320px] flex flex-col gap-8 bg-white rounded-lg md:max-w-[380px]">
            <div className="flex justify-between">
                <p className="uppercase font-bold text-[18px]">Cart <span>({cartItem.quantity})</span></p>
                <button className="text-[15px] text-gray underline">Remove all</button>
            </div>
            {/* Items List */}
            <div className="flex items-center justify-between">
                {/* Thumb & Name + Price */}
                <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
                    {/* Thumb */}
                    <div className="w-[56px] sm:w-[64px] p-[10px] aspect-square flex items-center justify-center bg-ice rounded-md">
                        <img src={cartItem.thumbUrl} alt="" />
                    </div>
                    {/* Name & Price */}
                    <div>
                        {/* Product Name */}
                        <p className="font-bold uppercase text-[15px]">{cartItem.thumbName}</p>
                        {/* Price */}
                        <p className='font-bold text-[14px] text-gray'>{cartItem.priceFormatted}</p>
                    </div>
                </div>
                {/* Quantity */}
                <div className="flex bg-ice items-center">
                    <button className="px-[4px] sm:px-[11px] py-[7px]" onClick={decreaseQuantity}>-</button>
                    <p className="mx-2">{cartItem.quantity}</p>
                    <button className="px-[4px] sm:px-[11px] py-[7px]" onClick={increaseQuantity}>+</button>
                </div>
            </div>
            {/* Total */}
            <div className="flex justify-between">
                <p className="uppercase font-medium text-[15px] text-gray">Total</p>
                <p className="font-bold text-[18px]">$ {cartItem.price * cartItem.quantity}</p>
            </div>
            {/* Checkout button */}
            <div className="-mt-2">
                <Button className="w-full">Checkout</Button>
            </div>
        </div>
    )
}
export default Cart