import Logo from "./../../../assets/logo.svg";
import menuIcon from "./../../../assets/header/icon-hamburger.svg" 
import cartIcon from "./../../../assets/header/icon-cart.svg" 

const Header = ({isInHome} : {isInHome: boolean}) => {
    return (
        <header className="px-6 py-8 flex items-center justify-between border-b-[1px] border-[#2c2c2c]" style={{backgroundColor: isInHome ? 'transparent' : 'black'}}>
            <button aria-label='Open menu'>
                <img src={menuIcon} alt="" />
            </button>
            <div>
                <img src={Logo} alt="" />
                <h1 className="sr-only">audiophile</h1>
            </div>
            <button aria-label="Open cart">
                <img src={cartIcon} alt="" />
            </button>
        </header>
    )
}

export default Header