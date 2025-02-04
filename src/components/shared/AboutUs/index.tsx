import { useSharedData} from "../../../context/sharedContext";
import { useWindowContext } from "../../../context/windowContext";

const AboutUs = () => {
    const {aboutUs} = useSharedData();
    const {width}   = useWindowContext();

    return (
        <div className="2xl:grid 2xl:grid-cols-2 2xl:justify-items-end 2xl:items-center">
            
            {/* Image */}
            <img className="mx-auto 2xl:order-2 2xl:mx-[unset] 2xl:max-h-[500px] 2xl:rounded-lg 3xl:max-h-[580px]" 
                src={width < 560 ? aboutUs.imageGallery.mobileUrl 
                    : width < 1280 ? aboutUs.imageGallery.tabletUrl 
                    : aboutUs.imageGallery.desktopUrl
                } 
                alt="" 
            />
            

            {/* TEXT */}
            <div className="px-6 md:px-10 lg:px-14 xl:px-20 2xl:max-w-[1110px] 2xl:px-0">
                {/* title */}
                <h2 className="mt-10 mb-8 font-bold text-2xl text-center tracking-[1px] uppercase
                        sm:text-[28px] 2xl:text-left 2xl:max-w-[75%] 2xl:text-4xl"
                >
                    Bringing you the <span className="text-peru">best</span> audio gear
                </h2>

                {/* description*/}
                {aboutUs.description.map((p, index) => {
                    return(
                        <p key={index} className="text-[15px] leading-[1.5] text-center text-gray
                                2xl:text-left 2xl:max-w-[80%]
                        ">
                            {p}
                        </p>
                    )
                })}
            </div>
            
        </div>
    )
}
export default AboutUs