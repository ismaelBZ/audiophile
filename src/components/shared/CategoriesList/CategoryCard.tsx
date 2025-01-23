import { NavLink } from "react-router";
import HeadphoneImg from "./../../../assets/shared/mobile/HeadphoneShadowImg.png";
import ArrowIcon from "./../../../assets/utils/buttons/shop-arrow.svg";

const CategoryCard = ({name, imgUrl} : {name: string, imgUrl: string}) => {
    return (
        <NavLink to="/headphones">
            <div className="relative max-w-[320px] mx-auto 2xl:max-w-[unset]">
                <img className="mx-auto h-[104px] xl:h-[160px]" src={imgUrl} alt="" />
                <div className="-mt-2 pb-6 flex flex-col gap-4">
                    <p className="font-bold text-[15px] text-center tracking-[1px] uppercase">{name}</p>
                    <p className="font-bold text-[13px] text-center text-gray">SHOP<span><img className="inline ml-3" src={ArrowIcon} alt="" /></span></p>
                </div>
                <div className="absolute bottom-0 w-full h-[75%] -z-10 bg-ice rounded-lg "></div>
            </div>
        </NavLink>
    )
}
export default CategoryCard