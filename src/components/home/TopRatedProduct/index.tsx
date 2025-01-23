import {useState, useEffect} from "react";
import ProductImage from "./../../../assets/home/mobile/image-earphones-yx1.jpg";
import Button from "../../utils/buttons/Secondary";

const data = {
    productName: "YX1 EARPHONES",
    images: {
        mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/top-rated/topRated-mobile.jpg?updatedAt=1737575234773",
        tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/top-rated/topRated-tablet.jpg?updatedAt=1737575235087",
        desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/top-rated/topRated-desktop.jpg?updatedAt=1737575234966"
    }
}

const TopRatedProduct = () => {

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
                if (width < 560) {
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
        <div className="md:grid md:grid-cols-2 md:gap-4">
            {/* Image */}
            <img 
                src={media == "mobile" ? data.images.mobileUrl : media == "tablet" ? data.images.tabletUrl : data.images.desktopUrl} 
                className="object-cover rounded-md md:max-h-[320px] w-full"
                alt="" />
            
            {/* Text */}
            <div 
                className="mt-6 px-6 py-10 bg-ice rounded-md 
                    md:mt-0 md:flex flex-col items-start justify-center"
            >
                <h2 className="mb-7 font-bold text-2xl sm:text-[28px] tracking-[2px] uppercase">
                    {data.productName}
                </h2>
                <Button />
            </div>
        </div>
    )
}
export default TopRatedProduct