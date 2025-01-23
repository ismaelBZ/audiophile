import {useState, useEffect} from "react"
import ProductImage from "./../../../assets/home/mobile/image-speaker-zx7.jpg";
import Button from "../../utils/buttons/Secondary";

const data = {
    productName: "ZX7 SPEAKER",
    images: {
        mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Popular/popular-mobile.jpg?updatedAt=1737575161067",
        tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Popular/popular-tablet.jpg?updatedAt=1737575130779",
        desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Popular/popular-desktop.jpg?updatedAt=1737575159792"
    }
}

const PopularProducts = () => {
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
            <img 
                src={media == "mobile" ? data.images.mobileUrl : media == "tablet" ? data.images.tabletUrl : data.images.desktopUrl} 
                className="col-start-1 row-start-1 w-full max-h-[320px] object-cover rounded-md " 
                alt="" 
            />
            <div className="col-start-1 row-start-1 px-6">
                <h2 className="mb-8 text-2xl sm:text-[28px] tracking-[1px] font-bold uppercase">
                    {data.productName}
                </h2>
                <div className="origin-bottom-left scale-[.85] sm:scale-[unset]">
                    <Button />
                </div>
            </div>
        </div>
    )
}
export default PopularProducts