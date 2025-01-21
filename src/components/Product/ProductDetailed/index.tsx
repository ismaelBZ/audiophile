import { useState, useEffect } from "react";
import Button from "./../../utils/buttons/Primary";

// Images
import ProductImageMobile from "./../../../assets/shared/Products/Mobile/image-product.jpg";
import ProductImageTablet from "./../../../assets/shared/Products/Tablet/image-product.jpg";
import ProductImageDesktop from "./../../../assets/shared/Products/Desktop/image-product.jpg";
import XIcon from "./../../../assets/icons/x.svg";
import DetailedImage1Mobile from "./../../../assets/shared/Products/Mobile/image-gallery-1.jpg";
import DetailedImage2Mobile from "./../../../assets/shared/Products/Mobile/image-gallery-2.jpg";
import DetailedImage3Mobile from "./../../../assets/shared/Products/Mobile/image-gallery-3.jpg";
import DetailedImage1Tablet from "./../../../assets/shared/Products/Tablet/image-gallery-1.jpg";
import DetailedImage2Tablet from "./../../../assets/shared/Products/Tablet/image-gallery-2.jpg";
import DetailedImage3Tablet from "./../../../assets/shared/Products/Tablet/image-gallery-3.jpg";
import DetailedImage1Desktop from "./../../../assets/shared/Products/Desktop/image-gallery-1.jpg";
import DetailedImage2Desktop from "./../../../assets/shared/Products/Desktop/image-gallery-2.jpg";
import DetailedImage3Desktop from "./../../../assets/shared/Products/Desktop/image-gallery-3.jpg";



export const ProductDetailed = () => {
    const [quantity, setQuantity] = useState(0); 
    const [width, setWidth] = useState(window.outerWidth);

    useEffect(() => {
        handleWidth();
        window.addEventListener('resize', handleWidth)

        return (() => window.removeEventListener('resize', handleWidth))
    }, []);

    const handleWidth = () => {
        setWidth(window.outerWidth);
    }

    const media = (function detectMedia() {
        let media = ""
        if (width < 768) {
            media = 'mobile';
        } else if (width < 1024) {
            media = "tablet";
        } else if (width < 1280) {
            media = "laptop"
        } else if (width < 1440) {
            media = "desktop"
        } else {
            media = "wide"
        }
        return media;
    })();

    return (
        <div className="flex flex-col gap-[88px]">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center ">
                {/* Image */}
                    <img className="max-h-[350px] object-cover rounded-lg 
                            md:max-h-[425px] md:max-w-[unset] md:w-full
                            2xl:max-w-[540px]" 
                            src={media == "mobile" ? ProductImageMobile : media == "tablet" ? ProductImageTablet : ProductImageDesktop} 
                            alt="" 
                    />
                
                {/* Details - name, description, price, units, add to cart button*/}
                <div className="flex flex-col gap-6 md:ml-10 xl:ml-16 2xl:ml-0 2xl:max-w-[83%] 2xl:justify-self-end
                ">
                    <p className="text-[14px] tracking-[10px] text-peru uppercase">
                        NEW PRODUCT
                    </p>
                    <h2 className="max-w-[200px] font-bold text-[28px]
                            md:text-[40px] md:max-w-[400px]
                            xl:leading-[1] 
                    ">
                        XX99 Mark II Headphones
                    </h2>
                    <p className="text-[15px] text-gray
                            xl:text-start xl:leading-[1.7]
                    ">
                        The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                    </p>
                    <p className="font-bold text-[19px] tracking-[1.3px]">$ 2,999</p>
                    <div className="flex gap-4">
                        {/* Quantity */}
                        <div className="w-fit flex flex-row gap-2 items-center bg-ice ">
                            {/* Decrease Button */}
                            <button className="p-4"
                                onClick={() => setQuantity((old) => old == 0 ? 0 : quantity - 1)}
                            >
                                -
                            </button>

                            {/* Value */}
                            <p className="font-bold">
                                {quantity}
                            </p>

                            {/* Increase Button */}
                            <button className="p-4"
                                onClick={() => setQuantity(() => quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </div>
            

            <div className="flex flex-col gap-[88px] 2xl:flex-row">
                {/* Features */}
                <div className="flex flex-col gap-6 2xl:basis-3/5">
                    <h3 className="font-bold text-[24px]">Features</h3>
                    <p className="text-[15px] text-gray">
                        Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                    </p>
                    <p className="text-[15px] text-gray">
                        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                    </p>
                </div>

                {/* In the Box */}
                <div className="2xl:basis-2/5">
                    <h3 className="mb-6 font-bold text-[24px] uppercase">In the Box</h3>
                        <table>
                            <thead>
                                <tr className="sr-only">
                                    <th>Quantity</th>
                                    <th>Item(s)</th>
                                </tr>
                            </thead>
                            <tbody className="flex flex-col items-start">
                                <tr className="flex gap-5 font-bold text-gray">
                                    <td className="text-peru w-[30px]">1 <span className={`content-[url(./assets/icons/x.svg)]`}></span></td>
                                    <td>Headphone Unit</td>
                                </tr>
                                <tr className="flex gap-5 font-bold text-gray">
                                    <td className="text-peru w-[30px]">2 <span className={`content-[url(./assets/icons/x.svg)]`}></span></td>
                                    <td>Replacement Earcups</td>
                                </tr>
                                <tr className="flex gap-5 font-bold text-gray">
                                    <td className="text-peru w-[30px]">1 <span className={`content-[url(./assets/icons/x.svg)]`}></span></td>
                                    <td>User Manual</td>
                                </tr>
                                <tr className="flex gap-5 font-bold text-gray">
                                    <td className="text-peru w-[30px]">1 <span className={`content-[url(./assets/icons/x.svg)]`}></span></td>
                                    <td>3.5mm 5m Audio Cable</td>
                                </tr>
                                <tr className="flex gap-5 font-bold text-gray">
                                    <td className="text-peru w-[30px]">1 <span className={`content-[url(./assets/icons/x.svg)]`}></span></td>
                                    <td>Travel Bag</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>


            {/* Image Gallery */}
            <ul className="flex flex-col gap-5 md:grid md:grid-cols-2">
                <li className="md:order-1 md:row-start-1 md:row-end-2">
                    <img className="max-h-[500px] w-full object-cover rounded-lg 2xl:max-h-[280px]" src={media== "mobile" ? DetailedImage1Mobile : media == "tablet" ? DetailedImage1Tablet : DetailedImage1Desktop} alt="Description of the product details that can be seen in the image." />
                </li>
                <li className="md:order-3 md:row-start-2 md:row-end-3 ">
                    <img className="max-h-[500px] w-full object-cover rounded-lg 2xl:max-h-[280px]" src={media== "mobile" ? DetailedImage2Mobile : media == "tablet" ? DetailedImage2Tablet : DetailedImage2Desktop} alt="Description of the product details that can be seen in the image." />
                </li >
                <li className="md:order-2 md:row-start-1 md:row-end-3 ">
                    <img className="max-h-[500px] w-full object-cover rounded-lg md:max-h-[unset] md:h-full 2xl:max" src={media== "mobile" ? DetailedImage3Mobile : media == "tablet" ? DetailedImage3Tablet : DetailedImage3Desktop} alt="Description of the product details that can be seen in the image." />
                </li>
            </ul>       
        </div>
    )
}

export default ProductDetailed