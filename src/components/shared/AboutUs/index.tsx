import {useEffect, useState} from "react";

import PhotoMobile from "./../../../assets/shared/mobile/image-best-gear.jpg";
import PhotoTablet from "./../../../assets/shared/tablet/image-best-gear.jpg";
import PhotoDesktop from "./../../../assets/shared/Desktop/image-best-gear.jpg"

const data = {
    title: 'Bringing you the <span className="text-peru">best</span> audio gear',
    description: [
        "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
    ],
    imageGallery: {
        mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/AboutUs/image-best-gear-mobile.jpg?updatedAt=1737570135107",
        tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/AboutUs/image-best-gear-tablet.jpg?updatedAt=1737570166580",
        desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/AboutUs/image-best-gear-desktop.jpg?updatedAt=1737570166868"
    }
}


const AboutUs = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        handleWindowProperties();
        window.addEventListener('resize', handleWindowProperties);

        return( () => window.removeEventListener('resize', handleWindowProperties));
    }, [])

    const handleWindowProperties = () => {
        setWindowWidth(() => window.innerWidth);
    }

    return (
        <div className="2xl:grid 2xl:grid-cols-2 2xl:justify-items-end 2xl:items-center">
            {/* Image */}
            <img className="mx-auto 2xl:order-2 2xl:mx-[unset] 2xl:max-h-[500px] 2xl:rounded-lg 3xl:max-h-[580px]" 
                src={windowWidth < 560 ? data.imageGallery.mobileUrl : windowWidth < 1280 ? data.imageGallery.tabletUrl : data.imageGallery.desktopUrl} 
                alt="" 
            />
            
            {/* TEXT */}
            <div className="px-6 md:px-10 lg:px-14 xl:px-20 2xl:max-w-[1110px] 2xl:px-0">
                <h2 className="mt-10 mb-8 font-bold text-2xl text-center tracking-[1px] uppercase
                        sm:text-[28px] 
                        2xl:text-left 2xl:max-w-[75%] 2xl:text-4xl 
                ">
                    Bringing you the <span className="text-peru">best</span> audio gear
                </h2>
                {data.description.map((p) => {
                    return(
                        <p className="text-[15px] leading-[1.5] text-center text-gray
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