import {useState, useEffect} from "react";

import ProductImageMobile from './../../../assets/home/mobile/image-header.jpg';
import Button from "../../utils/buttons/Primary";

const data={
    productName: "XX99 Mark II Headphones",
    description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    newProduct: true,
    images: {
        mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Hero/hero-mobile.jpg?updatedAt=1737574869545",
        tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Hero/hero-tablet.jpg?updatedAt=1737574869478",
        desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Hero/hero-desktop.jpg?updatedAt=1737574869498"
    }
}

const MainProduct = () => {
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
    
        console.log(width);
        
    return (
        <div className="bg-shadow">
            <article className="grid items-center xl:grid-cols-2 xl:max-w-[1280px] xl:mx-auto ">
                {/* Image */}
                <img className="col-start-1 row-start-1 
                        md:max-h-[800px] md:w-full md:object-cover 
                        lg:max-h-none lg:w-auto
                        xl:col-end-3
                    " 
                    src={media == "mobile" ? data.images.mobileUrl 
                        : media == "tablet" ? data.images.tabletUrl 
                        : data.images.desktopUrl
                    } 
                    alt="" 
                />
                
                {/* Text */}
                <div className="col-start-1 row-start-1 mt-[90px] flex flex-col items-center sm:max-w-[450px] sm:mx-auto xl:col-end-2">
                    <p className="upperscale text-gray text-[14px] tracking-[10px]">
                        {data.newProduct && "NEW PRODUCT"}
                    </p>
                    <h2 className="mt-4 mb-6 font-bold text-white text-[36px] tracking-[2px] leading-[1.1] text-center uppercase sm:text-[48px] md:text-[56px]">
                        {data.productName}
                    </h2>
                    <p className="mb-7 w-[80%] font-medium text-[15px] text-white text-center opacity-75">
                        {data.description}
                    </p>
                    <Button />
                </div>
            </article>
        </div>
    )
}
export default MainProduct