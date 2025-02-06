import Logo from "./../../../assets/logo.svg";
import menuIcon from "./../../../assets/header/icon-hamburger.svg" 
import cartIcon from "./../../../assets/header/icon-cart.svg" 
import { useCartContext } from "../../../context/cartContext";
import Cart from "../Cart";
import { NavLink, useLocation } from "react-router";
import { useNavegationHistoryContext } from "../../../context/navegationsHistoryContext";


const Header = ({isInHome} : {isInHome: boolean}) => {
    const {openCart, isShowingCart} = useCartContext();
    const {pathname: urlHistory} = useLocation();
    const {handleHistory} = useNavegationHistoryContext();
    handleHistory(urlHistory);
    
    return (
        <>
            <div style={{backgroundColor: isInHome ? 'transparent' : 'black'}} >
                {/* bg transparent in home */}
                <header>   
                    <div className="px-6 py-8 flex items-center justify-between border-b-[1px] border-[#2c2c2c]
                                md:px-10 lg:px-14 xl:px-20 
                                2xl:max-w-[1110px] 2xl:mx-auto 2xl:px-0" >
                        
                        {/* Menu icon */}
                        <div className="xl:hidden">
                            <button aria-label='Open menu'>
                                <img src={menuIcon} alt="" />
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-24 2xl:gap-36 3xl:gap-x-48">
                            {/* brand */}
                            <div>
                                <img src={Logo} alt="" />
                                <h1 className="sr-only">audiophile</h1>
                            </div>
                            
                            {/* navlinks */}
                            <ul className="hidden xl:flex gap-7">
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
                        
                        {/* cart */}
                        <button aria-label="Open cart" onClick={openCart}>
                            <img src={cartIcon} alt="" />
                        </button>
                    </div>
                </header>

                {/* CART */}
                {isShowingCart &&
                    <Cart />
                }
            </div>
        </>
    )
}

export default Header