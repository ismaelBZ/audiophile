// Hooks
import { useHomeQuery } from "../../../hooks/querys/useHomeQuery";
import { useStore } from "../../../stores/useStore";
// Component
import Button from "../../utils/buttons/Primary";

const HeroProduct = () => {
    const {data} = useHomeQuery();
    const media = useStore((state) => state.deviceType)

    
    return (
        <>
            {data &&
                <div className="bg-shadow w-lvw max-w-full px-6 md:px-10 pg:mx-14 xl:px-20">
                    <article className="grid items-center xl:pt-6 xl:pb-10 2xl:py-0 xl:grid-cols-2 xl:max-w-[1280px] xl:mx-auto ">
                        <img className="col-start-1 row-start-1 
                                md:max-h-[800px] md:w-full md:object-cover 
                                lg:max-h-none lg:w-auto
                                xl:col-end-3
                            " 
                            src={ media == "mobile" 
                                    ? data.heroProduct.images.mobileUrl 
                                : media == "tablet" 
                                    ? data.heroProduct.images.tabletUrl 
                                    : data.heroProduct.images.desktopUrl
                            } 
                            alt="" 
                        />
                        
                        <div className="col-start-1 row-start-1 mt-[90px] flex flex-col items-center 
                                sm:max-w-[450px] sm:mx-auto xl:col-end-2 xl:items-start"
                        >
                            <p className="upperscale text-gray text-[14px] tracking-[10px]">
                                { data.heroProduct.newProduct && "NEW PRODUCT"}
                            </p>

                            <h2 className="mt-4 mb-6 font-bold text-white text-[36px] tracking-[2px] leading-[1.1] text-center uppercase 
                                    sm:text-[48px] md:text-[56px] xl:text-left"
                            >
                                { data.heroProduct.productName }
                            </h2>

                            <p className="mb-7 w-[80%] font-medium text-[15px] text-white text-center opacity-75 
                                    xl:text-left"
                            >
                                { data.heroProduct.description }
                            </p>
                            
                            <Button to={ data.heroProduct.productUrl } />
                        </div>
                    </article>
                </div>
            }
        </>
    )
}
export default HeroProduct