import { useState, useEffect } from "react";
import { SimilarProduct } from "./SimilarProduct";

// Images
import Img1Mobile from "../../../assets/shared/Products/Mobile/image-xx99-mark-one-headphones.jpg"
import Img2Mobile from "../../../assets/shared/Products/Mobile/image-xx59-headphones.jpg"
import Img3Mobile from "../../../assets/shared/Products/Mobile/image-zx9-speaker.jpg"
import Img1Tablet from "../../../assets/shared/Products/Tablet/image-xx99-mark-one-headphones.jpg"
import Img2Tablet from "../../../assets/shared/Products/Tablet/image-xx59-headphones.jpg"
import Img3Tablet from "../../../assets/shared/Products/Tablet/image-zx9-speaker.jpg"
import Img1Desktop from "../../../assets/shared/Products/Tablet/image-xx99-mark-one-headphones.jpg"
import Img2Desktop from "../../../assets/shared/Products/Tablet/image-xx59-headphones.jpg"
import Img3Desktop from "../../../assets/shared/Products/Tablet/image-zx9-speaker.jpg"

export const SimilarProductList = () => {
    const [width, setWidth] = useState(window.outerWidth);

    useEffect(() => {
        handleWidth();
        window.addEventListener('resize', handleWidth)

        return (() => window.removeEventListener('resize', handleWidth))
    }, []);

    const handleWidth = () => {
        setWidth(window.outerWidth);
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

    console.log(media);

    return (
        <>
            <h3 className="mb-10 font-bold uppercase text-[24px] text-center">you may also like</h3>
            <ul className="flex flex-col items-center gap-14 lg:flex-row lg:gap-3 " aria-label="Click on one of the see products buttons to navigate to the specific product page.">
                <li className="grow">
                    <SimilarProduct title="XX99 Mark I" imgUrl={media == "mobile" ? Img1Mobile : media == "tablet" ? Img1Tablet : Img1Desktop} />
                </li>
                <li className="grow">
                    <SimilarProduct title="xx59" imgUrl={media == "mobile" ? Img2Mobile : media == "tablet" ? Img2Tablet : Img2Desktop} />
                </li>
                <li className="grow">
                    <SimilarProduct title="zx9 Speaker" imgUrl={media == "mobile" ? Img3Mobile : media == "tablet" ? Img3Tablet : Img3Desktop} />
                </li>
            </ul>
        </>
    )
}