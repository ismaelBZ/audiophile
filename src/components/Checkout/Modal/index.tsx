import Button from "./../../utils/buttons/Primary";
import CheckIcon from "./../../../assets/utils/checkout/orderOk.svg"
import {CartItem} from "./../../../types/CartItem_T";
import { formatPrice } from "../../../Utils/utils";

// come from cart

const CheckoutModal = ({cartList} : {cartList: CartItem[]}) => {
    const total = (function () {
        const total = cartList.reduce((acc, act) => {
            return acc += act.price;
        }, 0)  
        return formatPrice(total);
    })();

    return (
        <div className="p-8 flex flex-col gap-6 rounded-md bg-white lg:max-w-[540px]">
            <img className="w-[64px]" src={CheckIcon} alt="Check out concluded" />
            <p className="font-bold text-[24px] leading-[1]">Thank you for your order</p>
            <p className="-mt-2 text-gray text-[15px]">You will recive an email confirmation shortly.</p>
            <div className="lg:flex lg:flex-row">
                <div className="p-8 pb-6 bg-ice rounded-t-md lg:basis-7/12 lg:rounded-none lg:rounded-l-md">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-[28px] sm:w-[40px]" src={cartList[0].thumbUrl} alt="" />
                            <div className="ml-2 sm:ml-7">
                                <p className="font-bold text-[15px] ">{cartList[0].thumbName}</p>
                                <p className="font-bold text-[14px] text-gray">$ {cartList[0].priceFormatted}</p>
                            </div>
                        </div>
                        <p className="font-bold text-[15px] text-gray">x{cartList[0].quantity}</p>
                    </div>
                    <hr className="my-3 text-[#ddd]"></hr>
                    <p className="font-bold text-[12px] text-gray text-center">and {cartList.length - 1} other item(s)</p>
                </div>
                <div className="p-8 bg-black rounded-b-md lg:basis-5/12 lg:rounded-none lg:rounded-r-md">
                    <p className="font-bold uppercase text-[15px] text-gray">Grand Total</p>
                    <p className="mt-2 font-bold text-[18px] text-white">{total}</p>            
                </div>
            </div>
            <Button className="w-full">Back to home</Button>
        </div>
    )
}
export default CheckoutModal