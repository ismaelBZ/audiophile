import { useState } from 'react';
import Header from "./../components/shared/Header";
import Footer from "../components/shared/Footer";
import GoBack from "../components/utils/buttons/GoBack";
import Thumb from "./../assets/shared/Products/Mobile/thumb.png";
import Button from "./../components/utils/buttons/Primary";
import CheckoutModal from '../components/Checkout/Modal';

const Checkout = () => {
    const [eMoney, setEMoney] = useState(true);

    const handleSubmit = () => { }

    return (
        <div className="bg-snow">
            <div className="mx-6 md:mx-10 lg:mx-14 xl:mx-20">

                {/* HEADER  */}
                <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                    <Header isInHome={false} />
                </div>
                <GoBack />

                <CheckoutModal />
                {/* MAIN */}
                <main className="mb-24 flex flex-col gap-8">
                    
                <div className="xl:max-w-[1110px] xl:mx-auto xl:flex xl:gap-7 xl:items-start">
                    {/* Checkout Card */}
                    <div className="p-6 bg-white rounded-md basis-[65%]">
                        <h2 className="font-bold tracking-[1px] text-[28px] uppercase leading-[1]">Checkout</h2>

                        {/* Form */}
                        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                            <fieldset></fieldset>

                            {/* Billing Details */}
                            <fieldset className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-x-4">

                                <legend className="mb-4 font-bold text-[13px] tracking-[0.93px] uppercase text-peru">Billing Details</legend>

                                {/* Name */}
                                <div className="flex flex-col gap-2 lg:w-[48%]">
                                    <label className="font-bold text-[12px]" htmlFor="name">Name </label>
                                    <input
                                        className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]"  
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        placeholder="Alexei Ward" />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2 lg:w-[48%]">
                                    <label className="font-bold text-[12px]" htmlFor="email">Email</label>
                                    <input
                                        className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]"  
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="alexei@mail.com" />
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col gap-2 lg:w-[48%]">
                                    <label className="font-bold text-[12px]" htmlFor="phone">Phone Number</label>
                                    <input
                                        className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]" 
                                        type="tel" 
                                        name="phone" 
                                        id="phone" 
                                        placeholder="+1 202-555-0136" />
                                </div>
                            </fieldset>

                            {/* Shipping Info */}
                            <fieldset className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-x-4">

                                <legend className="mb-4 font-bold text-[13px] tracking-[0.93px] uppercase text-peru">Shipping Info</legend>

                                {/* Address */}
                                <div className="flex flex-col gap-2 lg:w-[98%]">
                                    <label className="font-bold text-[12px]" htmlFor="address">Your Address</label>
                                    <input 
                                        className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]"
                                        type="text" 
                                        name="address" 
                                        id="address" 
                                        placeholder="1137 Williams Avenue" 
                                    />
                                </div>

                                {/* Zip Code */}
                                <div className="flex flex-col gap-2 lg:w-[48%]">
                                    <label className="font-bold text-[12px]" htmlFor="zipCode">ZIP Code</label>
                                    <input 
                                        className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]"
                                        type="text" 
                                        name="zipCode" 
                                        id="zipCode" 
                                        placeholder="10001" 
                                    />
                                </div>

                                {/* City */}
                                <div className="flex flex-col gap-2 lg:w-[48%]">
                                    <label className="font-bold text-[12px]" htmlFor="city">City</label>
                                    <input 
                                        className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]"
                                        type="text" 
                                        name="city" 
                                        id="city" 
                                        placeholder="New York" 
                                    />
                                </div>

                                {/* Country */}
                                <div className="flex flex-col gap-2 lg:w-[48%]">
                                    <label className="font-bold text-[12px]" htmlFor="country">Country</label>
                                    <input 
                                        className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]"
                                        type="text" 
                                        name="country" 
                                        id="country" 
                                        placeholder="United States" 
                                    />
                                </div>
                            </fieldset>

                            {/* Payment Details */}
                            <fieldset>
                                <legend className="mb-4 font-bold text-[13px] tracking-[0.93px] uppercase text-peru">Payment Details</legend>

                                {/* Payment method */}
                                <fieldset className="flex flex-col gap-4 items-end">
                                    <legend className="my-4 font-bold text-[12px] lg:-my-4">Payment Method</legend>

                                    {/* e-money */}
                                    <div className="flex gap-6 ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md font-bold text-[#a0a0a0] text-[14px] lg:w-[48%] lg:mr-2">
                                        <input type="radio" name="paymentMethod" id="eMoney" value="eMoney" />
                                        <label htmlFor="eMoney">e-Money</label>
                                    </div>

                                    {/* Cash on Delivery */}
                                    <div className="flex gap-6 ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md font-bold text-[#a0a0a0] text-[14px] lg:w-[48%] lg:mr-2">
                                        <input 
                                            type="radio" 
                                            name="paymentMethod" 
                                            id="cashOnDelivery" 
                                            value="OnDelivery" 
                                            />
                                        <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                                    </div>
                                </fieldset>

                                {/* e-Money Info */}
                                {eMoney && <fieldset className="mt-8 flex flex-col gap-4 lg:flex-row">
                                    <legend className="sr-only">e-Money Info</legend>

                                    {/* Number */}
                                    <div className="flex flex-col gap-3 lg:w-[48%]">
                                        <label className="font-bold text-[12px]" htmlFor="eMoneyNumber">e-Money Number</label>
                                        <input
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]" 
                                            type="text" 
                                            name="eMoneyNumber" 
                                            id="eMoneyNumber" 
                                            placeholder="238521993" 
                                        />
                                    </div>

                                    {/* Pin */}
                                    <div className="flex flex-col gap-3 lg:w-[48%]">
                                        <label className="font-bold text-[12px]" htmlFor="eMoneyPin">e-Money Pin</label>
                                        <input 
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]"
                                            type="text" 
                                            name="eMoneyPin" 
                                            id="eMoneyPin" 
                                            placeholder="6891" 
                                        />
                                    </div>
                                </fieldset>
                                }
                            </fieldset>
                        </form>
                    </div>
                
                    {/* Summary */}
                    <section className="px-6 py-8 flex flex-col gap-8 bg-white rounded-md basis-[35%] grow">
                        <h2 className="font-bold tracking-[1.3px] text-[18px]">Summary</h2>

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
                                    <p className="font-bold uppercase">XX99 MK II</p>
                                    {/* Price */}
                                    <p className='font-bold text-[14px] text-gray'>$ {new Intl.NumberFormat('en-US', { style: 'decimal' }).format(2999)}</p>
                                </div>
                            </div>

                            {/* Quantity */}
                            <p className="font-bold text-[15px] text-gray">x1</p>
                        </div>

                        {/* Payment resume*/}
                        <table aria-label="payment resume">
                            <thead className="sr-only">
                                <tr>
                                    <th>Info</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-medium text-[15px] text-gray uppercase">Total</td>
                                    <td className="text-right font-bold text-[18px]">$ {new Intl.NumberFormat('en-US', { style: 'decimal' }).format(2999)}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium text-[15px] text-gray uppercase">Shipping</td>
                                    <td className="text-right font-bold text-[18px]">$ {new Intl.NumberFormat('en-US', { style: 'decimal' }).format(50)}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium text-[15px] text-gray uppercase">Vat (included)</td>
                                    <td className="text-right font-bold text-[18px] text-peru">$ {new Intl.NumberFormat('en-US', { style: 'decimal' }).format(1079)}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <td>Total</td>
                                <td className="text-right font-bold text-[18px]">$ {new Intl.NumberFormat('en-US', { style: 'decimal' }).format(4037)}</td>
                            </tfoot>
                        </table>

                        {/* Continue & Pay Button */}
                        <Button className='w-full'>Continue & Pay</Button>
                    </section>
                </div>   


                </main>


                {/* FOOTER */}
                <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Checkout