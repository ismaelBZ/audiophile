// Hooks
import { useHomeQuery } from "../../../hooks/querys/useHomeQuery";
import { useStore } from "../../../stores/useStore";
// Components
import Button from "../../utils/buttons/Secondary";

const TopRatedProduct = () => {
    const {data} = useHomeQuery();
    const media = useStore((state) => state.deviceType)

    console.log("Top Rated Product");
    
    return (
        <>
            {data &&
                <article className="md:grid md:grid-cols-2 md:gap-4">
                    <img src={ media == "mobile" 
                                ? data.topRatedProduct.images.mobileUrl 
                            : media == "tablet" 
                                ? data.topRatedProduct.images.tabletUrl 
                                : data.topRatedProduct.images.desktopUrl
                            } 
                        className="object-cover rounded-md md:max-h-[320px] w-full"
                        alt="" 
                    />
                    
                    <div className="mt-6 px-6 py-10 bg-ice rounded-md 
                            md:mt-0 md:flex flex-col items-start justify-center"
                    >
                        <h2 className="mb-7 font-bold text-2xl sm:text-[28px] tracking-[2px] uppercase">
                            { data.topRatedProduct.productName }
                        </h2>

                        <Button to={ data.topRatedProduct.productUrl } />
                    </div>
                </article>
            }
        </>
    )
}
export default TopRatedProduct