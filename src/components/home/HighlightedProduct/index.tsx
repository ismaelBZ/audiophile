import {useEffect, useState} from 'react';
import ProductImage from "./../../../assets/home/mobile/image-speaker-zx9.png";
import Button from "./../../utils/buttons/Secondary";

const HighlightedProduct = () => {

    {/* Logic to get card width and set circles width based on that */}
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        handleCardWidth();
        window.addEventListener('resize', handleCardWidth);
        return(() => {
            window.removeEventListener('resize', handleCardWidth);
        })
    }, [])

    const handleCardWidth = () => {
        const cardElement = document.getElementById('highlightedProductCard');
        const width = window.getComputedStyle(cardElement!, null).getPropertyValue('width');
        setCardWidth(() => parseInt(width));

        // Set differents widths based on bodys margins
        // if (width > 320) {
            
        // } 
    }

    return (
        <article id='highlightedProductCard' className='relative bg-peru overflow-hidden'>
            <div className='grid grid-cols-1 grid-rows-1 items-center justify-items-center'>
                {/* Align items with grid pattern and to big circle with position absolute only* keep it centered, just adjust the scale    */}
                <div className="absolute  border-[1px] border-white opacity-30 rounded-full col-start-1 row-start-1" style={{ width: `${cardWidth * 7/4}px`, height: `${cardWidth * 7/4}px`}}></div>
                <div className="border-[1px] border-white opacity-30 rounded-full col-start-1 row-start-1" style={{ width: `${cardWidth}px`, height: `${cardWidth}px` }}></div>
                <div className="border-[1px] border-white opacity-30 rounded-full col-start-1 row-start-1" style={{ width: `${cardWidth - 30}px`, height: `${cardWidth - 30}px` }}></div>
                <img className="col-start-1 row-start-1" style={{width: `${cardWidth*0.5}px`}} src={ProductImage} alt="" />
            </div>
            <div className="-mt-5 px-6 pb-14 flex flex-col gap-6 items-center">
                <h2 className="w-[80%] font-bold tracking-[2px] text-3xl sm:text-4xl text-center text-white">
                    ZX9 SPEAKER
                </h2>
                <p className="text-[15px] text-center leading-[1.5] text-white opacity-80">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <button className='z-20 px-[25px] py-[16px] font-bold tracking-[1px] bg-black text-white border-[1px] border-black hover:bg-white hover:text-black'>
                    SEE PRODUCT
                </button>
            </div>
        </article>
    )
}
export default HighlightedProduct