// Types
import { ProductCard_T } from '../../../types/pages/productCard/ProductCard_T';
// Hook
import { useStore } from '../../../stores/useStore';
// Components
import Button from "./../../utils/buttons/Primary";

const ProductCard = ({reverse, product} : {reverse?: boolean, product: ProductCard_T}) => {
    const width = useStore((state) => state.windowWidth);
    const xlFlexDirection = reverse ? "xl:flex-row-reverse" : "xl:flex-row";

    return (
        <div className="">
            <article className={`flex flex-col items-center gap-8 ${ xlFlexDirection }
                xl:gap-32 xl:max-w-[1110px] xl:mx-auto `}
            >
                <div className="flex items-center w-full max-h-[400px] rounded-lg overflow-hidden bg-ice 
                        xl:max-h-[unset] xl:grow xl:basis-7/12"
                >
                    <img className="mx-auto md:max-h-[800px] xl:max-h-[400px] 3xl:max-h-[560px]" 
                        src={ width < 560 
                                ? product.categoryImages.mobileUrl
                            : width < 1024 
                                ? product.categoryImages.tabletUrl 
                                : product.categoryImages.desktopUrl
                        } 
                        alt="" 
                    />
                </div>

                <div className="flex flex-col items-center gap-6
                    md:max-w-[560px] xl:items-start xl:gap-4 xl:max-w-[445px] xl:basis-5/12"
                >
                    <p className="text-[14px] tracking-[10px] text-center text-peru uppercase">
                        { product.newProduct && "NEW PRODUCT" }
                    </p>
                    <h2 className="max-w-[200px] font-bold text-[28px] text-center
                            md:text-[40px] md:max-w-[400px] xl:text-left xl:leading-[1]"
                    >
                        { product.productName }
                    </h2>
                    <p className="text-[15px] text-gray text-center
                            xl:text-start xl:leading-[1.7] xl:my-4"
                    >
                        { product.description }
                    </p>
                    <Button to={ product.productUrl } />
                </div>
            </article>
        </div>
    )
}
export default ProductCard 