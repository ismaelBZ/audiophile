import Arrow from "./../../../assets/utils/buttons/shop-arrow.svg";

const ShopBtn = () => {
    return (
        <button className='px-[26px] py-[17px] flex items-center gap-3 font-bold text-gray'>
            SHOP <img src={Arrow} alt="" />
        </button>
    )
}
export default ShopBtn