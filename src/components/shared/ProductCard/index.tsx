import {useState, useEffect} from 'react';
import ProductImageMobile from "./../../../assets/shared/Products/Mobile/XX99_Mark_II_Headphones_Alpha.png"
import ProductImageDesktop from "./../../../assets/shared/Products/Desktop/image-category-page-preview.jpg"
import Button from "./../../utils/buttons/Primary";


const ProductCard = ({reverse} : {reverse?: boolean}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const xlFlexDirection = reverse ? "xl:flex-row-reverse" : "xl:flex-row"

    useEffect(() => {
        getWidth()
        window.addEventListener('resize', getWidth);
        
        return () => {window.removeEventListener('resize', getWidth)}
    }, []);

    const getWidth = () => {
        setWindowWidth(window.innerWidth);
    }

    const imageSrcSet = () => {
        if (windowWidth < 1024) {
            return ProductImageMobile;
        } else {
            return ProductImageDesktop;
        }
    }

    return (
        <article className={`flex flex-col items-center gap-8 
            ${xlFlexDirection} 
            xl:gap-32 xl:max-w-[1110px] xl:m-auto 
        `}>
            {/* Image */}
            <div className="bg-ice w-full rounded-lg xl:grow xl:basis-7/12">
                <img className="mx-auto xl:max-h-[400px] 3xl:max-h-[560px]" src={imageSrcSet()} alt="" />
            </div>

            {/* Info */}
            <div className="flex flex-col items-center gap-6
                md:max-w-[560px]
                xl:items-start xl:gap-4 xl:max-w-[445px] xl:basis-5/12
            ">
                <p className="text-[14px] tracking-[10px] text-center text-peru uppercase">
                    NEW PRODUCT
                </p>
                <h2 className="max-w-[200px] font-bold text-[28px] text-center
                        md:text-[40px] md:max-w-[400px]
                        xl:text-left xl:leading-[1] 
                ">
                    XX99 Mark II Headphones
                </h2>
                <p className="text-[15px] text-gray text-center
                        xl:text-start xl:leading-[1.7] xl:my-4
                ">
                    The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                </p>
                <Button />
            </div>
        </article>
    )
}
export default ProductCard 