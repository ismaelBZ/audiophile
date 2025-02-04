import { useWindowContext } from '../../../context/windowContext';
import { HightlightedProduct_T } from '../../../types/pages/home/HIghlightedProduct_T';
import { Link } from 'react-router';


const HighlightedProduct = ({product} : {product: HightlightedProduct_T}) => {
    const {media} = useWindowContext();

    return (
        <article id='highlightedProductCard' className='py-14 bg-peru rounded-md overflow-hidden xl:flex xl:pb-0'>
            
            {/* Image + Pattern */}
            <div className="relative 
                    grid grid-cols-1 grid-rows-1 items-center justify-items-center "
            >
                {/* Circles Pattern */}
                <img 
                    src={product.patternUrl} 
                    className=" absolute 
                        col-start-1 col-end-1 row-start-1 row-end-1
                        max-w-[155%] xl:top-[-20%]
                        md:max-w-[120%] lg:max-w-[100%] xl:max-w-[200%]"
                    alt="" />

                {/* Product Image */}
                <img 
                    src={media =="mobile" ? product.images.mobileUrl 
                        : media == "tablet" ? product.images.tabletUrl 
                        : product.images.desktopUrl} 
                    className="z-10 col-start-1 col-end-1 row-start-1 row-end-1
                        w-[45%] max-w-[180px] 
                        xl:w-[75%] xl:max-w-[410px] xl:translate-y-[3%]"
                    alt=""
                />
            </div>

                {/* Text info */}
                <div className="z-10 mt-6 mx-auto px-6 flex flex-col gap-6 items-center 
                        max-w-[300px] sm:max-w-[320px] md:max-w-[380px]
                        xl:items-start
                    "
                >   
                    {/* product name */}
                    <h2 className="max-w-[80%] font-bold tracking-[2px] leading-[1] text-3xl text-center text-white 
                                    sm:text-4xl 
                                    md:text-[48px] md:tracking-[2px] md:leading-[1.1] 
                                    xl:text-left">
                        {product.productName}
                    </h2>
                    {/* description */}
                    <p className="text-[15px] text-center leading-[1.5] text-white opacity-80 xl:text-left">
                        {product.description}
                    </p>
                    {/* button */}
                    <Link to={product.productUrl} className='z-20 px-[25px] py-[16px] font-bold tracking-[1px] bg-black text-white border-[1px] border-black hover:bg-white hover:text-black'>
                        SEE PRODUCT
                    </Link>
                </div>
        </article>
    )
}
export default HighlightedProduct