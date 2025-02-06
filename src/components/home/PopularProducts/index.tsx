import Button from "../../utils/buttons/Secondary";
import { PopularProduct_T } from "../../../types/pages/home/PopularProduct_T";
import { useWindowContext } from "../../../context/windowContext";

const PopularProducts = ({product}: {product: PopularProduct_T}) => {
    const {media} = useWindowContext();
    
    return (
        <div className="grid grid-cols-1 grid-rows-1 items-center ">
            {/* image // bg is the image*/}
            <img 
                src={media == "mobile" ? product.images.mobileUrl 
                    : media == "tablet" ? product.images.tabletUrl 
                    : product.images.desktopUrl} 
                className="col-start-1 row-start-1 w-full max-h-[320px] object-cover rounded-md " 
                alt="" 
            />
            {/* Text info */}
            <div className="col-start-1 row-start-1 px-6">
                {/* product name */}
                <h2 className="mb-8 text-2xl sm:text-[28px] tracking-[1px] font-bold uppercase">
                    {product.productName}
                </h2>
                {/* button */}
                <div className="origin-bottom-left scale-[.85] sm:scale-[unset]">
                    <Button to={product.productUrl} />
                </div>
            </div>
        </div>
    )
}
export default PopularProducts