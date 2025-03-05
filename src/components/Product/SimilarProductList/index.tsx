// Types
import { SimilarProduct as SimilarProduct_T } from "../../../types/Product_T";
// Hooks
import { useStore } from "../../../stores/useStore";
// Components
import { SimilarProduct } from "./SimilarProduct";
import { useProductQuery } from "../../../hooks/querys/useProductsQuery";

export const SimilarProductList = () => {
    const { data } = useProductQuery()
    const media = useStore((state) => state.deviceType);

    console.log("Similar Products")

    return (
        <>
            { data && 
            <>
                <h3 className="mb-10 font-bold uppercase text-[24px] text-center">
                    you may also like
                </h3>
                <ul className="flex flex-col items-center gap-14 lg:flex-row lg:gap-3" 
                    aria-label="Click on one of the see products buttons to navigate to the specific product page."
                >
                    { data.similarProducts.map(( product, index ) => {
                        return (
                            <li className="grow" key={ index }>
                                <SimilarProduct 
                                    title={ product.productName } 
                                    imgUrl={ media == "mobile" 
                                                ? product.images.mobileUrl 
                                            : media == "tablet" 
                                                ? product.images.tabletUrl 
                                            : product.images.desktopUrl
                                    }
                                    productUrl={ product.productUrl }
                                />
                            </li>
                        )
                    })}
                </ul>
            </>
            }       
        </>
    )
}