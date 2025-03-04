import { useState, useEffect } from "react";
import { Product_T } from "../../../types/Product_T";
import { formatPrice } from "../../../utils/formatPrice";
import AddToCart from "./AddToCart";
import { useStore } from "../../../stores/useStore";


export const ProductDetailed = ({product} : {product: Product_T}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const setActiveProduct = useStore((state) => state.setActiveProduct)
    const formatedPrice = formatPrice(product.price);
    setActiveProduct({
        thumbUrl: product.images.thumbUrl,
        thumbName: product.thumbName,
        price: product.price,
        priceFormatted: formatPrice(product.price),
        quantity: 0
    })

    useEffect(() => {
        handleWidth();
        window.addEventListener('resize', handleWidth)

        return (() => window.removeEventListener('resize', handleWidth))
    }, []);

    const handleWidth = () => {
        setWidth(window.innerWidth);
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
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center">
                
                <img className="max-h-[350px] object-cover rounded-lg 
                        md:max-h-[425px] md:max-w-[unset] md:w-full
                        2xl:max-w-[540px]
                    " 
                    src={media == "mobile" ? product.images.mobileUrl : media == "tablet" ? product.images.tabletUrl : product.images.desktopUrl} 
                    alt="" 
                />
            
                <div className="flex flex-col gap-6 xl:ml-16 2xl:ml-0 2xl:max-w-[83%] 2xl:justify-self-end
                ">
                    <p className="text-[14px] tracking-[10px] text-peru uppercase">
                        {product.newProduct && 'NEW PRODUCT'}
                    </p>

                    <h2 className="max-w-[200px] font-bold text-[28px]
                            md:text-[40px] md:max-w-[400px]
                            xl:leading-[1] 
                    ">
                        {product.productName}
                    </h2>

                    <p className="text-[15px] text-gray
                            xl:text-start xl:leading-[1.7]
                    ">
                        {product.description}
                    </p>

                    <p className="font-bold text-[19px] tracking-[1.3px]">
                        {formatedPrice}
                    </p>

                    <AddToCart product={product} />
                </div>
            </div>
            
            <div className="flex flex-col gap-[88px] 2xl:flex-row">
                <div className="flex flex-col gap-6 2xl:basis-3/5">
                    
                    <h3 className="font-bold text-[24px] uppercase">Features</h3>
                    
                    {product.features.map((paragraph, index) => {
                        return (
                            <p key={index} className="text-[15px] text-gray">
                                {paragraph}
                            </p>
                        )
                    })}

                </div>

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
                            
                            {product.boxContent.map(({item, quantity}, index) => {
                                return (
                                    <tr key={index} className="flex gap-5 font-bold text-gray">
                                        <td className="text-peru w-[30px]">{quantity} <span className={`content-[url(./assets/icons/x.svg)]`}></span></td>
                                        <td>{item}</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>

            <ul className="flex flex-col gap-5 md:grid md:grid-cols-2">
                <li className="md:order-1 md:row-start-1 md:row-end-2">
                    <img 
                        className="max-h-[500px] w-full object-cover rounded-lg 2xl:max-h-[280px]" 
                        src={ media== "mobile" ? 
                                product.images.detailedImages.mobileImages[0] 
                            : media == "tablet" ? 
                                product.images.detailedImages.tabletImages[0] 
                            : product.images.detailedImages.desktopImages[0]
                        } 
                        alt="Description of the product details that can be seen in the image." 
                    />
                </li>
                <li className="md:order-3 md:row-start-2 md:row-end-3 ">
                    <img 
                        className="max-h-[500px] w-full object-cover rounded-lg 2xl:max-h-[280px]" 
                        src={ media== "mobile" ? 
                                product.images.detailedImages.mobileImages[1] 
                            : media == "tablet" ? 
                                product.images.detailedImages.tabletImages[1] 
                            : product.images.detailedImages.desktopImages[1]
                        } 
                        alt="Description of the product details that can be seen in the image." 
                    />
                </li >
                <li className="md:order-2 md:row-start-1 md:row-end-3 ">
                    <img 
                        className="max-h-[500px] w-full object-cover rounded-lg md:max-h-[unset] md:h-full 2xl:max" 
                        src={ media== "mobile" ? 
                                product.images.detailedImages.mobileImages[2] 
                            : media == "tablet" ? 
                                product.images.detailedImages.tabletImages[2] 
                            : product.images.detailedImages.desktopImages[2]
                        } 
                    alt="Description of the product details that can be seen in the image." />
                </li>
            </ul>       
        </div>
    )
}

export default ProductDetailed;