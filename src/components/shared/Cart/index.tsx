import {useState, setState} from 'react';
import Thumb from "./../../../assets/shared/Products/Mobile/thumb.png";
import Button from "./../../utils/buttons/Primary";

const Cart = () => {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(2999) // reduce list items price * quantityc
    const ItemList = [];
    const item = {
        productName: "xx99 MK II",
        price: 2999
    }
    
    return (
        <div className="px-7 py-8 max-w-[320px] flex flex-col gap-8 bg-white rounded-lg md:max-w-[380px]">
            <div className="flex justify-between">
                <p className="uppercase font-bold text-[18px]">Cart <span>({quantity})</span></p>
                <button className="text-[15px] text-gray">Remove all</button>
            </div>
            {/* Items List */}
            <div className="flex items-center justify-between">
                {/* Thumb & Name + Price */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                    {/* Thumb */}
                    <div className="w-[64px] aspect-square flex items-center justify-center bg-ice rounded-md">
                        <img src={Thumb} alt="" />
                    </div>
                    {/* Name & Price */}
                    <div>
                        {/* Product Name */}
                        <p className="font-bold uppercase">{item.productName}</p>
                        {/* Price */}
                        <p className='font-bold text-[14px] text-gray'>$ {new Intl.NumberFormat('en-US', {style: 'decimal'}).format(item.price)}</p>
                    </div>
                </div>
                {/* Quantity */}
                <div className="flex bg-ice items-center">
                    <button className="px-[11px] py-[7px]" onClick={() => setQuantity(quantity == 0 ? 0 : quantity - 1)}>-</button>
                    <p className="mx-2">{quantity}</p>
                    <button className="px-[11px] py-[7px]" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </div>
            {/* Total */}
            <div className="flex justify-between">
                <p className="uppercase font-medium text-[15px] text-gray">Total</p>
                <p className="font-bold text-[18px]">$ {new Intl.NumberFormat('en-US', {style: 'decimal'}).format(total)}</p>
            </div>
            {/* Checkout button */}
            <div className="-mt-2">
                <Button className="w-full">Checkout</Button>
            </div>
        </div>
    )
}
export default Cart