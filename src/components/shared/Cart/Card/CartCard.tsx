import Button from "../../../utils/buttons/Primary";
import { useStore } from '../../../../stores/useStore';

export const CartCard = () => {
    const cartList = useStore((state) => state.cartList)
    const decreaseQuantity = useStore((state) => state.decreaseQuantity);
    const increaseQuantity = useStore((state) => state.increaseQuantity);
    const clearCart = useStore((state) => state.clearCart)
    const closeCart = useStore((state) => state.closeCart)


    const totalItems = cartList?.reduce((acc, item) => {
        acc += item.quantity;
        return acc;
    }, 0)


    return (
        <div className="w-[90%] max-w-[320px] mx-auto px-7 py-8 flex flex-col gap-8 bg-white rounded-lg md:w-[420px]">
            <div className="flex justify-between">
                
                <p className="uppercase font-bold text-[18px]">
                    Cart <span>({cartList && totalItems})</span>
                </p>
                <button className="text-[15px] text-gray underline" onClick={clearCart}>Remove all</button>
            </div>
            
            <ul className="flex flex-col gap-6">
                {cartList.map((item, index) => {
                    return (
                        <li key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
                                
                                <div className="w-[56px] sm:w-[64px] p-[10px] aspect-square flex items-center justify-center bg-ice rounded-md">
                                    <img src={item.thumbUrl} alt="" />
                                </div>

                                <div>
                                    <p className="font-bold uppercase text-[15px]">
                                        {item.thumbName}
                                    </p>

                                    <p className='font-bold text-[14px] text-gray'>
                                        {item.priceFormatted}
                                    </p>
                                </div>
                            </div>

                            <div className="flex bg-ice items-center">
                                <button className="px-[4px] sm:px-[11px] py-[7px]" onClick={() => decreaseQuantity(index)}>-</button>
                                <p className="mx-2">{item.quantity}</p>
                                <button className="px-[4px] sm:px-[11px] py-[7px]" onClick={() => increaseQuantity(index)}>+</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

            <div className="flex justify-between">
                <p className="uppercase font-medium text-[15px] text-gray">
                    Total
                </p>

                <p className="font-bold text-[18px]">
                    $ { cartList &&
                        cartList.reduce((acc, item) => {
                            return acc += item.price * item.quantity
                        },0)
                    }
                </p>
            </div>

            <div className="-mt-2">
                <Button to='/checkout' className="w-full" onClick={closeCart}>Checkout</Button>
            </div>

        </div>
    )
}

