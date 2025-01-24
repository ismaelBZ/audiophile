import {useState, useEffect} from "react"
import Button from "../../utils/buttons/Secondary";
import { PopularProduct_T } from "../../../types/pages/home/PopularProduct_T";

const PopularProducts = ({product}: {product: PopularProduct_T}) => {
    const [width, setWidth] = useState(window.innerWidth);
    
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
                    <Button />
                </div>
            </div>
        </div>
    )
}
export default PopularProducts