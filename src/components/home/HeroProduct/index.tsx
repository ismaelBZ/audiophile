import Button from "../../utils/buttons/Primary";
import { HeroProduct_T } from "../../../types/pages/home/HeroProduct_T";
import { useWindowContext } from "../../../context/windowContext";
0
const HeroProduct = ({product}: {product: HeroProduct_T}) => {
    const {media} = useWindowContext();
    
    return (
        <div className="bg-shadow w-lvw max-w-full px-6 md:px-10 pg:mx-14 xl:px-20">
            <article className="grid items-center xl:pt-6 xl:pb-10 2xl:py-0 xl:grid-cols-2 xl:max-w-[1280px] xl:mx-auto ">
                {/* Image */}
                <img className="col-start-1 row-start-1 
                        md:max-h-[800px] md:w-full md:object-cover 
                        lg:max-h-none lg:w-auto
                        xl:col-end-3
                    " 
                    src={media == "mobile" ? product.images.mobileUrl 
                        : media == "tablet" ? product.images.tabletUrl 
                        : product.images.desktopUrl
                    } 
                    alt="" 
                />
                
                {/* Text */}
                <div className="col-start-1 row-start-1 mt-[90px] flex flex-col items-center 
                        sm:max-w-[450px] sm:mx-auto xl:col-end-2 xl:items-start"
                >
                    {/* new product */}
                    <p className="upperscale text-gray text-[14px] tracking-[10px]">
                        {product.newProduct && "NEW PRODUCT"}
                    </p>
                    {/* product name */}
                    <h2 className="mt-4 mb-6 font-bold text-white text-[36px] tracking-[2px] leading-[1.1] text-center uppercase 
                            sm:text-[48px] md:text-[56px] xl:text-left"
                    >
                        {product.productName}
                    </h2>
                    {/* description */}
                    <p className="mb-7 w-[80%] font-medium text-[15px] text-white text-center opacity-75 
                            xl:text-left"
                    >
                        {product.description}
                    </p>
                    
                    <Button to={product.productUrl} />
                </div>
            </article>
        </div>
    )
}
export default HeroProduct