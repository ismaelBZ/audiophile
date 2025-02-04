import { NavLink } from "react-router";
import ArrowIcon from "./../../../assets/utils/buttons/shop-arrow.svg";

const CategoryCard = ({name, imgUrl, to=""} : {name: string, imgUrl: string, to: string}) => {
    return (
        <NavLink to={to}>
            <div className="relative max-w-[320px] mx-auto 2xl:max-w-[unset]">
                {/* Image */}
                <img className="mx-auto h-[104px] xl:h-[160px]" src={imgUrl} alt="" />
                
                {/* Text */}
                <div className="-mt-2 pb-6 flex flex-col gap-4">
                    <p className="font-bold text-[15px] text-center tracking-[1px] uppercase">
                        {name}
                    </p>
                    <p className="font-bold text-[13px] text-center text-gray">
                        SHOP
                        <span><img className="inline ml-3" src={ArrowIcon} alt="" /></span> 
                    </p>
                </div>

                {/* Background */}
                <div className="absolute bottom-0 w-full h-[75%] -z-10 bg-ice rounded-lg "></div>
            </div>
        </NavLink>
    )
}
export default CategoryCard