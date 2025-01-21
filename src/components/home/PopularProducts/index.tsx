import ProductImage from "./../../../assets/home/mobile/image-speaker-zx7.jpg";
import Button from "../../utils/buttons/Secondary";

const PopularProducts = () => {
    return (
        <div className="max-h-[320px] grid grid-cols-1 grid-rows-1 items-center">
            <img className="col-start-1 row-start-1" src={ProductImage} alt="" />
            <div className="col-start-1 row-start-1 px-6">
                <h2 className="mb-8 text-2xl sm:text-[28px] tracking-[1px] font-bold uppercase">
                    ZX7 SPEAKER
                </h2>
                <div className="origin-bottom-left scale-[.85] sm:scale-[unset]">
                    <Button />
                </div>
            </div>
        </div>
    )
}
export default PopularProducts