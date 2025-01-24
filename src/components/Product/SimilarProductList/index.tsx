import { useState, useEffect } from "react";
import { SimilarProduct } from "./SimilarProduct";
import { SimilarProduct as SimilarProduct_T } from "../../../types/Product_T";

export const SimilarProductList = ({similarProducts}: {similarProducts: SimilarProduct_T[]}) => {
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
        <>
            <h3 className="mb-10 font-bold uppercase text-[24px] text-center">you may also like</h3>
            <ul className="flex flex-col items-center gap-14 lg:flex-row lg:gap-3" aria-label="Click on one of the see products buttons to navigate to the specific product page.">
                {similarProducts.map((product, index) => {
                    return (
                        <li className="grow" key={index}>
                            <SimilarProduct 
                                title={product.productName} 
                                imgUrl={media == "mobile" ? product.images.mobileUrl : 
                                    media == "tablet" ? product.images.tabletUrl 
                                    : product.images.desktopUrl
                                } 
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}