import {useEffect, useState} from 'react';

const data = {
    productName: "ZX9 SPEAKER",
    description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    images: {
        mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/hightlighted/highlighted-mobile.png?updatedAt=1737574969886",
        tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/hightlighted/hightlighted-tablet.png?updatedAt=1737574969735",
        desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/hightlighted/highlighted-desktop.png?updatedAt=1737574940509"
    },
    patternUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/hightlighted/pattern-circles.svg?updatedAt=1737605090450"
}

const HighlightedProduct = () => {
    // {/* Logic to get card width and set circles width based on that */}
    const [cardWidth, setCardWidth] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        handleWidth();
        handleCardWidth();

        window.addEventListener('resize', handleWidth)
        window.addEventListener('resize', handleCardWidth);

        return (() => {
            window.removeEventListener('resize', handleWidth)
            window.removeEventListener('resize', handleCardWidth)
        })
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



    const handleCardWidth = () => {
        const cardElement = document.getElementById('highlightedProductCard');
        const width = window.getComputedStyle(cardElement!, null).getPropertyValue('width');
        setCardWidth(() => parseInt(width));
    }

    return (
        <article id='highlightedProductCard' className='py-14 bg-peru rounded-md overflow-hidden xl:flex xl:pb-0'>
            
            {/* Image + Pattern */}
            <div 
                className="relative
                grid grid-cols-1 grid-rows-1 items-center justify-items-center 
            ">
                {/* Circles Pattern */}
                <img 
                    src={data.patternUrl} 
                    className=" absolute 
                        col-start-1 col-end-1 row-start-1 row-end-1
                        max-w-[155%] xl:top-[-20%]"
                    alt="" />

                {/* Product Image */}
                <img 
                    src={media =="mobile" ? data.images.mobileUrl : media == "tablet" ? data.images.tabletUrl : data.images.desktopUrl } 
                    alt=""
                    className="z-10
                        col-start-1 col-end-1 row-start-1 row-end-1
                        w-[45%] max-w-[180px] 
                        xl:w-[75%] xl:max-w-[410px] xl:translate-y-[3%]
                    "
                />
                    
            </div>

                {/* Info */}
                <div className="z-10 mt-6 mx-auto px-6 flex flex-col gap-6 items-center 
                        max-w-[300px] sm:max-w-[320px] md:max-w-[380px]
                        xl:items-start
                    "
                >
                    <h2 className="max-w-[80%] font-bold tracking-[2px] leading-[1] text-3xl text-center text-white 
                                    sm:text-4xl 
                                    md:text-[48px] md:tracking-[2px] md:leading-[1.1] 
                                    xl:text-left">
                        {data.productName}
                    </h2>
                    <p className="text-[15px] text-center leading-[1.5] text-white opacity-80 xl:text-left">
                        {data.description}
                    </p>
                    <button className='z-20 px-[25px] py-[16px] font-bold tracking-[1px] bg-black text-white border-[1px] border-black hover:bg-white hover:text-black'>
                        SEE PRODUCT
                    </button>
                </div>
        </article>
    )
}
export default HighlightedProduct