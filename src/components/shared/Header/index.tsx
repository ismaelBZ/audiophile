import Logo from "./../../../assets/logo.svg";
import menuIcon from "./../../../assets/header/icon-hamburger.svg" 
import cartIcon from "./../../../assets/header/icon-cart.svg" 
import Cart from "../Cart";
import { NavLink, useLocation } from "react-router";
import { useNavegationHistoryContext } from "../../../context/navegationsHistoryContext";
import CategoriesList from "../CategoriesList";
import { useEffect, useState } from "react";
import { useStore } from "../../../stores/useStore";


const Header = ({bgColor} : {bgColor?: string}) => {
    const isShowingCart = useStore((state) => state.isShowingCart);
    const openCart = useStore((state) => state.openCart);
    const cartList = useStore((state) => state.cartList);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean | null>(null)
    const {pathname: urlHistory} = useLocation();
    const {handleHistory} = useNavegationHistoryContext();
    handleHistory(urlHistory);

    useEffect(() => {
        isMobileMenuVisible ? document.body.style.position = "fixed" : document.body.style.position = "static";
    }, [isMobileMenuVisible])

    const cartQuantity = cartList.reduce((acc, act) => {
        return acc + act.quantity;
    },0)
    
    return (
        <>
            <div style={{backgroundColor: bgColor ||'black'}} >
                <header>   
                    <div className="px-6 py-8 flex items-center justify-between border-b-[1px] border-[#2c2c2c]
                            md:px-10 lg:px-14 xl:px-20 
                            2xl:max-w-[1110px] 2xl:mx-auto 2xl:px-0
                        " 
                    >
                        
                        <div className="xl:hidden">
                            <button aria-label='Open menu' 
                                onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
                            >
                                <img src={menuIcon} alt="" />
                            </button>
                        </div>
                        
                        <div className="flex items-center xl:gap-24 2xl:gap-36 3xl:gap-x-48">
                            <div>
                                <img src={Logo} alt="" />
                                <h1 className="sr-only">AUDIOPHILE</h1>
                            </div>
                            
                            <ul className="hidden xl:flex md:gap-4 xl:gap-7">
                                    <li className="font-bold text-[13px] tracking-[2px] text-white uppercase">
                                        <NavLink to="/" >home</NavLink>
                                    </li>
                                    <li className="font-bold text-[13px] tracking-[2px] text-white uppercase">
                                        <NavLink to="/headphones" >headphones</NavLink>
                                    </li>
                                    <li className="font-bold text-[13px] tracking-[2px] text-white uppercase">
                                        <NavLink to="/speakers" >speakers</NavLink>
                                    </li>
                                    <li className="font-bold text-[13px] tracking-[2px] text-white uppercase">
                                        <NavLink to="/earphones" >earphones</NavLink>
                                    </li>
                            </ul>
                        </div>
                        
                        <button aria-label="Open cart" onClick={openCart}>
                            <div className="relative">
                                {cartQuantity > 0 && 
                                    <div className="absolute -top-[15px] -right-[16px] px-[8px] bg-peru rounded-full">
                                        <p className="text-[14px] text-white">{cartQuantity}</p>
                                    </div>
                                }
                                <img src={cartIcon} alt="" />
                            </div>
                        </button>
                    </div>
                </header>

                {isMobileMenuVisible && (
                    <div className="fixed xl:hidden">
                        <div className="relative">
                            <div className="w-svw h-lvh bg-black opacity-30 menu-wrapper"></div>
                            <div className="absolute top-0 z-10 w-svw px-6 py-8 bg-white menu-wrapper">
                                <CategoriesList onClick={() => setIsMobileMenuVisible(false)}/>
                            </div>
                        </div>
                    </div>
                )}

                {isShowingCart &&
                    <Cart />
                }
            </div>
        </>
    )
}

export default Header