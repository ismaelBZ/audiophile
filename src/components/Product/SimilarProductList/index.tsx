import { useState, useEffect } from "react";
import { SimilarProduct } from "./SimilarProduct";
import { SimilarProduct as SimilarProductT } from "../../../types/SimilarProduct_T";

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

const productsList: SimilarProductT[] = [
    {
        name: "XX99 MARK I",
        productUrl: "",
        images: {
            mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20I/Similar/xx99-mark-one-mobile.jpg?updatedAt=1737506941124",
            tabletUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20I/Similar/xx99-mark-one-tablet.jpg?updatedAt=1737507120053",
            desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20I/Similar/xx99-mark-one-desktop.jpg?updatedAt=1737507204951"
        }
    },
    {
        name: "XX59",
        productUrl: "",
        images: {
            mobileUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/XX59%20/similar/xx59-mobile.jpg?updatedAt=1737507323271",
            tabletUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/XX59%20/similar/xx59-tablet.jpg?updatedAt=1737507344902",
            desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/XX59%20/similar/xx59-desktop.jpg?updatedAt=1737507352720"
        }
    },
    {
        name: "ZX9 SPEAKER",
        productUrl: "",
        images: {
            mobileUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Speakers/ZX9/Similar/zx9-mobile.jpg?updatedAt=1737507528246",
            tabletUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Speakers/ZX9/Similar/zx9-tablet.jpg?updatedAt=1737507528410",
            desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Speakers/ZX9/Similar/zx9-desktop.jpg?updatedAt=1737507514184"
        }
    }
]


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
            <ul className="flex flex-col items-center gap-14 lg:flex-row lg:gap-3" aria-label="Click on one of the see products buttons to navigate to the specific product page.">
                {productsList.map((product, index) => {
                    return (
                        <li className="grow" key={index}>
                            <SimilarProduct 
                                title={product.name} 
                                imgUrl={media == "mobile" ? product.images.mobileUrl : 
                                    media == "tablet" ? product.images.tabletUrl 
                                    : product.images.desktopUrl
                                } 
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}