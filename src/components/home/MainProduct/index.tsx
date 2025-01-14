import ProductImageMobile from './../../../assets/home/mobile/image-header.jpg';
import Button from "../../utils/buttons/Primary";

const MainProduct = () => {
    return (
        <article className="grid items-end ">
            <img className="col-start-1 row-start-1" src={ProductImageMobile} alt="" />
            <div className="col-start-1 row-start-1 pb-12 sm:pb-28 flex flex-col items-center">
                <p className="upperscale text-gray text-[14px] tracking-[10px]">
                    NEW PRODUCT
                </p>
                <h2 className="mt-4 mb-6 font-bold text-white text-[36px] tracking-[2px] leading-[1.1] text-center upperscale">
                    XX99 Mark II HeadphoneS
                </h2>
                <p className="mb-7 w-[80%] text-white text-center opacity-75">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <Button />
            </div>
        </article>
    )
}
export default MainProduct