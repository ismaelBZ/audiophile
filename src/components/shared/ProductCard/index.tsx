import { ProductCard_T } from '../../../types/pages/productCard/ProductCard_T';
import Button from "./../../utils/buttons/Primary";
import { useWindowContext } from '../../../context/windowContext';

const ProductCard = ({reverse, product} : {reverse?: boolean, product: ProductCard_T}) => {
    const {width} = useWindowContext();
    const xlFlexDirection = reverse ? "xl:flex-row-reverse" : "xl:flex-row"

    const imageSrcSet = () => {
        if (width < 560) {
            return product.categoryImages.mobileUrl;
        } else if (width < 1024) {
            return product.categoryImages.tabletUrl;
        } else {
            return product.categoryImages.desktopUrl;
        }
    }

    return (
        <div className="">
            <article className={`flex flex-col items-center gap-8 
                ${xlFlexDirection}
                xl:gap-32 xl:max-w-[1110px] xl:mx-auto 
            `}>
                {/* Image */}
                <div className="bg-ice w-full rounded-lg md:max-h-[400px] md:flex md:items-center md:overflow-hidden xl:max-h-[unset] xl:grow xl:basis-7/12">
                    <img className="mx-auto md:max-h-[800px] xl:max-h-[400px] 3xl:max-h-[560px]" src={imageSrcSet()} alt="" />
                </div>

                {/* Info */}
                <div className="flex flex-col items-center gap-6
                    md:max-w-[560px]
                    xl:items-start xl:gap-4 xl:max-w-[445px] xl:basis-5/12
                ">
                    <p className="text-[14px] tracking-[10px] text-center text-peru uppercase">
                        {product.newProduct && "NEW PRODUCT"}
                    </p>
                    <h2 className="max-w-[200px] font-bold text-[28px] text-center
                            md:text-[40px] md:max-w-[400px]
                            xl:text-left xl:leading-[1] 
                    ">
                        {product.productName}
                    </h2>
                    <p className="text-[15px] text-gray text-center
                            xl:text-start xl:leading-[1.7] xl:my-4
                    ">
                        {product.description}
                    </p>
                    {/* Button */}
                    <Button to={product.productUrl} onClick={() => ""}/>
                </div>
            </article>
        </div>
    )
}
export default ProductCard 