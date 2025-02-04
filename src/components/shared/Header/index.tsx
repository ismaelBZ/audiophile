import Logo from "./../../../assets/logo.svg";
import menuIcon from "./../../../assets/header/icon-hamburger.svg" 
import cartIcon from "./../../../assets/header/icon-cart.svg" 
import { useCartContext } from "../../../context/cartContext";


const Header = ({isInHome, categorie} : {isInHome: boolean, categorie?: string}) => {
    const {openCart} = useCartContext();
    
    return (
        <>
            <div style={{backgroundColor: isInHome ? 'transparent' : 'black'}} >
                {/* bg transparent in home */}
                <header>   
                    <div className="px-6 py-8 flex items-center justify-between border-b-[1px] border-[#2c2c2c]
                                md:px-10 lg:px-14 xl:px-20 
                                2xl:max-w-[1110px] 2xl:mx-auto 2xl:px-0" >
                        {/* Menu icon */}
                        <button aria-label='Open menu'>
                            <img src={menuIcon} alt="" />
                        </button>
                        {/* brand */}
                        <div>
                            <img src={Logo} alt="" />
                            <h1 className="sr-only">audiophile</h1>
                        </div>
                        {/* cart */}
                        <button aria-label="Open cart" onClick={openCart}>
                            <img src={cartIcon} alt="" />
                        </button>
                    </div>
                    { categorie && 
                        <p className="p-8 lg:p-24 font-bold tracking-[2px] text-[28px] text-white text-center uppercase bg-black">{categorie}</p>
                    }
                </header>
            </div>
        </>
    )
}

export default Header