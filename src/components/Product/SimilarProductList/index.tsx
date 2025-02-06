import { SimilarProduct } from "./SimilarProduct";
import { SimilarProduct as SimilarProduct_T } from "../../../types/Product_T";
import { useWindowContext } from "../../../context/windowContext";

export const SimilarProductList = ({similarProducts}: {similarProducts: SimilarProduct_T[]}) => {
    const {media} = useWindowContext();

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
                                productUrl={product.productUrl}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}