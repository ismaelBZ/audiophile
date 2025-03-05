// Types
import { CheckoutSchema, CheckoutSchema_T } from '../types/Checkout_T';
// Hooks
import { useStore } from '../stores/useStore';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoad } from '../hooks/useLoad';
// Components
import Header from "./../components/shared/Header";
import Footer from "../components/shared/Footer";
import GoBack from "../components/utils/buttons/GoBack";
import PaymentResume from '../utils/PaymentResume';


const Checkout = () => {
    useLoad();
    const cartList = useStore((state) => state.cartList);
    const clearCart = useStore((state) => state.clearCart);
    
    const {
        register, 
        reset,
        watch, 
        formState: { errors }, 
        handleSubmit
    } = useForm<CheckoutSchema_T>({resolver: zodResolver(CheckoutSchema), defaultValues: {paymentMethod: "eMoney"}});
    const paymentMethod = watch("paymentMethod");

    
    const paymentResume = cartList.length > 0 
        ? new PaymentResume(cartList) 
        : {
            getTotal: () => 0,
            getShipping: () => 0,
            getVat: () => 0,
            getGrandTotal: () => 0,
        };

    const onSubmit = async (data: FieldValues) => {
        try {
            await new Promise((result) => {setTimeout(result, 1000)});
            clearCart();
            reset();
        } catch (e) {
            console.log(e);
        }
    }

    console.log("render");
    console.log(errors);

    return (
        <div className="bg-snow">
            <div className="mx-6 md:mx-10 lg:mx-14 xl:mx-20 ">

                <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 3xl:w-svw">
                    <Header />
                </div>

                <GoBack />

                <main className="mb-24 flex flex-col gap-8 ">
                    <div className="xl:max-w-[1110px] xl:mx-auto xl:flex xl:gap-7 xl:items-start">
                        <section className="p-6 bg-white rounded-md basis-[65%]">
                            
                            <h2 className="font-bold tracking-[1px] text-[28px] uppercase leading-[1]">
                                CHECKOUT
                            </h2>

                            <form id="checkoutForm" className="flex flex-col gap-8" onSubmit={ handleSubmit(onSubmit) }>
                                
                                <fieldset className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-x-4">
                                    
                                    <legend className="mb-4 pt-2 font-bold text-[13px] tracking-[0.93px] uppercase text-peru">
                                        Billing Details
                                    </legend>

                                    <div className="flex flex-col gap-2 lg:w-[48%]">
                                        <div className="flex justify-between">
                                            <label className="font-bold text-[12px]" htmlFor="name">
                                                Name 
                                            </label>
                                            { errors.name && 
                                                <span className="text-red-500 text-[12px]">
                                                    Wrong format
                                                </span>
                                            }
                                        </div>
                                        <input
                                            id="name" 
                                            type="text" 
                                            { ...register( "name" ) }
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold 
                                                placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                            "  
                                            placeholder="Alexei Ward" 
                                        />
                                        { errors.name && 
                                            <p className="text-red-500 text-[12px]">
                                                { errors.name.message }
                                            </p>
                                        }
                                    </div>

                                    <div className="flex flex-col gap-2 lg:w-[48%]">
                                        <div className='flex justify-between'>
                                            <label className="font-bold text-[12px]" htmlFor="email">
                                                Email
                                            </label>
                                            { errors.email && 
                                                <span className="text-red-500 text-[12px]">
                                                    Wrong format
                                                </span>
                                            }
                                        </div>
                                        <input
                                            id="email" 
                                            type="text" 
                                            { ...register( "email" ) }
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md 
                                                placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                            "  
                                            placeholder="alexei@mail.com" 
                                        />
                                        { errors.email && 
                                            <p className="text-red-500 text-[12px]">
                                                { errors.email.message }
                                            </p>
                                        }
                                    </div>

                                    <div className="flex flex-col gap-2 lg:w-[48%]">
                                        <div className="flex justify-between">
                                            <label className="font-bold text-[12px]" htmlFor="phone">
                                                Phone Number
                                            </label>
                                            { errors.phone && 
                                                <span className="text-red-500 text-[12px]">
                                                    Wrong format
                                                </span>
                                            }
                                        </div>
                                        <input
                                            id="phone" 
                                            type="tel"
                                            { ...register( "phone" ) }
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md 
                                                placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                            " 
                                            placeholder="+(01) 202-555-0136" 
                                        />
                                        { errors.phone && 
                                            <p className="text-red-500 text-[12px]">
                                                { errors.phone.message }
                                            </p>
                                        }
                                    </div>
                                </fieldset>


                                <fieldset className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-x-4">
                                    
                                    <legend className="mb-4 font-bold text-[13px] tracking-[0.93px] uppercase text-peru">
                                        Shipping Info
                                    </legend>

                                    <div className="flex flex-col gap-2 lg:w-[98%]">
                                        <div className="flex justify-between">
                                            <label className="font-bold text-[12px]" htmlFor="address">
                                                Your Address
                                            </label>
                                            { errors.address && 
                                                <span className="text-red-500 text-[12px]">
                                                    Wrong format
                                                </span>
                                            }
                                        </div>
                                        <input 
                                            id="address" 
                                            type="text" 
                                            { ...register( "address" ) }
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md 
                                                placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                            "
                                            placeholder="1137 Williams Avenue" 
                                        />
                                        { errors.address && 
                                            <p className="text-red-500 text-[12px]">
                                                { errors.address.message }
                                            </p>
                                        }
                                    </div>

                                    <div className="flex flex-col gap-2 lg:w-[48%]">
                                        <div className="flex justify-between">
                                            <label className="font-bold text-[12px]" htmlFor="zipCode">
                                                ZIP Code
                                            </label>
                                            { errors.zipCode && 
                                                <span className="text-red-500 text-[12px]">
                                                    Wrong format
                                                </span>
                                            }
                                        </div>
                                        <input 
                                            id="zipCode" 
                                            type="text" 
                                            { ...register( "zipCode" ) }
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md 
                                                placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                            "
                                            placeholder="10001" 
                                        />
                                        { errors.zipCode && 
                                            <p className="text-red-500 text-[12px]">
                                                { errors.zipCode.message }
                                            </p>
                                        }
                                    </div>

                                    <div className="flex flex-col gap-2 lg:w-[48%]">
                                        <div className="flex justify-between">
                                            <label className="font-bold text-[12px]" htmlFor="city">
                                                City
                                            </label>
                                            { errors.city && 
                                                <span className="text-red-500 text-[12px]">
                                                    Wrong format
                                                </span>
                                            }
                                        </div>
                                        <input 
                                            id="city" 
                                            type="text"
                                            { ...register( "city" ) } 
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md 
                                                placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                            "
                                            placeholder="New York" 
                                        />
                                        { errors.city && 
                                            <p className="text-red-500 text-[12px]">
                                                { errors.city.message }
                                            </p>
                                        }
                                    </div>

                                    <div className="flex flex-col gap-2 lg:w-[48%]">
                                        <div className="flex justify-between">
                                            <label className="font-bold text-[12px]" htmlFor="country">
                                                Country
                                            </label>
                                            { errors.country && 
                                                <span className="text-red-500 text-[12px]">
                                                    Wrong format
                                                </span>
                                            }
                                        </div>
                                        <input 
                                            id="country" 
                                            type="text" 
                                            { ...register( "country" ) }
                                            className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md 
                                                placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                            "
                                            placeholder="United States" 
                                        />
                                        { errors.country && 
                                            <p className="text-red-500 text-[12px]">
                                                { errors.country.message }
                                            </p>
                                        }
                                    </div>
                                </fieldset>


                                <fieldset>
                                    
                                    <legend className="mb-4 font-bold text-[13px] tracking-[0.93px] uppercase text-peru">
                                        Payment Details
                                    </legend>
                                    
                                    <fieldset className="flex flex-col gap-4 lg:items-end">
                                        <legend className="my-4 font-bold text-[12px] lg:-my-4">
                                            Payment Method
                                        </legend>

                                        <div className="flex gap-6 ps-6 py-4 font-bold text-[14px] text-[#a0a0a0]
                                                border-[1px] rounded-md border-[#cfcfcf] 
                                                lg:w-[48%] lg:mr-2
                                            "
                                        >
                                            <input 
                                                id="eMoney" 
                                                type="radio" 
                                                { ...register( "paymentMethod", { value: "eMoney" })}
                                                value="eMoney" 
                                                defaultChecked
                                            />
                                            <label htmlFor="eMoney">
                                                e-Money
                                            </label>
                                        </div>

                                        <div className="flex gap-6 ps-6 py-4 font-bold text-[14px] text-[#a0a0a0]
                                                border-[1px] rounded-md border-[#cfcfcf] 
                                                lg:w-[48%] lg:mr-2
                                            "
                                        >
                                            <input 
                                                id="cashOnDelivery" 
                                                type="radio" 
                                                { ...register( "paymentMethod", { value: "onDelivery" })} 
                                                value="onDelivery"
                                            />
                                            <label 
                                                htmlFor="cashOnDelivery"
                                            >
                                                Cash On Delivery
                                            </label>
                                        </div>
                                    </fieldset>


                                    { paymentMethod === "eMoney" && 
                                        <fieldset className="mt-8 flex flex-col gap-4 lg:flex-row">
                                            <legend className="sr-only">
                                                e-Money Info
                                            </legend>

                                            <div className="flex flex-col gap-3 lg:w-[48%]">
                                                <div className="flex justify-between">
                                                    <label className="font-bold text-[12px]" htmlFor="eMoneyNumber">
                                                        e-Money Number
                                                    </label>
                                                    { errors.eMoneyNumber && 
                                                        <span className="text-red-500 text-[12px]">
                                                            Wrong format
                                                        </span>
                                                    }
                                                </div>
                                                <input
                                                    id="eMoneyNumber" 
                                                    type="text"
                                                    { ...register( "eMoneyNumber" ) } 
                                                    className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md placeholder-bold 
                                                        placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                                    " 
                                                    placeholder="238521993" 
                                                />
                                                { errors.eMoneyNumber && 
                                                    <p className="text-red-500 text-[12px]">
                                                        { errors.eMoneyNumber.message }
                                                    </p>
                                                }
                                            </div>

                                            <div className="flex flex-col gap-3 lg:w-[48%]">
                                                <div className="flex justify-between">
                                                    <label className="font-bold text-[12px]" htmlFor="eMoneyPin">
                                                        e-Money Pin
                                                    </label>
                                                    { errors.eMoneyPin && 
                                                        <span className="text-red-500 text-[12px]">
                                                            Wrong format
                                                        </span>
                                                    }
                                                </div>
                                                <input 
                                                    id="eMoneyPin" 
                                                    type="text" 
                                                    {  ...register( "eMoneyPin", ) }
                                                    className="ps-6 py-4 border-[#cfcfcf] border-[1px] rounded-md 
                                                        placeholder-bold placeholder-[#a0a0a0] placeholder:font-bold placeholder:text-[14px] placeholder:[2px]
                                                    "
                                                    placeholder="6891" 
                                                />
                                                { errors.eMoneyPin && 
                                                    <p className="text-red-500 text-[12px]">
                                                        { errors.eMoneyPin.message }
                                                    </p>
                                                }
                                            </div>
                                        </fieldset>
                                    }
                                </fieldset>
                            </form>
                        </section>
                    

                        <section className="px-6 py-8 flex flex-col gap-8 bg-white rounded-md basis-[35%] grow">
                            
                            <h2 className="font-bold tracking-[1.3px] text-[18px]">
                                Summary
                            </h2>
                            
                            <ul className="flex flex-col gap-[10px]">
                                { cartList.map(( item, index ) => (
                                    <li key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                                            
                                            <div className="w-[64px] p-[10px] aspect-square flex items-center justify-center bg-ice rounded-md">
                                                <img src={ item.thumbUrl } 
                                                    alt="" 
                                                />
                                            </div>

                                            <div>
                                                <p className="font-bold uppercase">
                                                    { item.thumbName }
                                                </p>
                                                <p className='font-bold text-[14px] text-gray'>
                                                    $ {item.priceFormatted}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="font-bold text-[15px] text-gray">
                                            x{ item.quantity }
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            
                            <table aria-label="payment resume">
                                <thead className="sr-only">
                                    <tr>
                                        <th>Info</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-medium text-[15px] text-gray uppercase">
                                            Total
                                        </td>
                                        <td className="text-right font-bold text-[18px]">
                                            { paymentResume.getTotal() }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[15px] text-gray uppercase">
                                            Shipping
                                        </td>
                                        <td className="text-right font-bold text-[18px]">
                                            { paymentResume.getShipping() }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[15px] text-gray uppercase">
                                            Vat (included)
                                        </td>
                                        <td className="text-right font-bold text-[18px] text-peru">
                                            { paymentResume.getVat() }
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <td className="font-medium text-[15px] text-gray uppercase">
                                        Grand Total
                                    </td>
                                    <td className="text-right font-bold text-[18px]">
                                        { paymentResume.getGrandTotal() }
                                    </td>
                                </tfoot>
                            </table>

                            <button 
                                type="submit" 
                                form="checkoutForm"
                                className='w-full px-[26px] py-[17px] font-bold text-[13px] tracking-[1px] text-white bg-peru 
                                    hover:bg-sandy disabled:bg-sandy uppercase
                                '
                                disabled={cartList.length < 1}
                                >
                                    Continue & Pay
                            </button>
                        </section>
                    </div>   
                </main>

                <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 3xl:w-svw">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Checkout