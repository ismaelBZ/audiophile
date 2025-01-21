import ProductImage from "./../../../assets/home/mobile/image-earphones-yx1.jpg";
import Button from "../../utils/buttons/Secondary";

const TopRatedProduct = () => {
  return (
    <div>
        <img src={ProductImage} alt="" />
        <div className="mt-6 px-6 py-10 bg-ice">
            <h2 className="mb-7 font-bold text-2xl sm:text-[28px] tracking-[2px]">
                YX1 EARPHONES
            </h2>
            <Button />
        </div>
    </div>
  )
}
export default TopRatedProduct