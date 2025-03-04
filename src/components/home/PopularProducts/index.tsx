import Button from "../../utils/buttons/Secondary";
import { useWindowContext } from "../../../context/windowContext";
import { useHomeQuery } from "../../../querys/useHomeQuery";


const PopularProduct = () => {
    const {data} = useHomeQuery();
    const {media} = useWindowContext();
    
    return (
        <>
            {data && 
                <article className="grid grid-cols-1 grid-rows-1 items-center ">
                    {/* image // bg is the image*/}
                    <img 
                        src={media == "mobile" ? data.popularProduct.images.mobileUrl 
                            : media == "tablet" ? data.popularProduct.images.tabletUrl 
                            : data.popularProduct.images.desktopUrl} 
                        className="col-start-1 row-start-1 w-full max-h-[320px] object-cover rounded-md " 
                        alt="" 
                    />
                    {/* Text info */}
                    <div className="col-start-1 row-start-1 px-6">
                        {/* product name */}
                        <h2 className="mb-8 text-2xl sm:text-[28px] tracking-[1px] font-bold uppercase">
                            {data.popularProduct.productName}
                        </h2>
                        {/* button */}
                        <div className="origin-bottom-left scale-[.85] sm:scale-[unset]">
                            <Button to={data.popularProduct.productUrl} />
                        </div>
                    </div>
                </article>
            }
        </>
    )
}
export default PopularProduct