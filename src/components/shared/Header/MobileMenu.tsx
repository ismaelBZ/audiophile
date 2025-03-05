import CategoriesList from "../CategoriesList"
import menuIcon from "./../../../assets/header/icon-hamburger.svg" 

export const MobileMenuButton = ({ isMobileMenuVisible, setIsMobileMenuVisible } : { isMobileMenuVisible: boolean, setIsMobileMenuVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className="xl:hidden">
            <button aria-label='Open menu' 
                onClick={() => setIsMobileMenuVisible( !isMobileMenuVisible )}
            >
                <img src={ menuIcon } alt="" />
            </button>
        </div>
    )
}

export const MobileMenu = ({ setIsMobileMenuVisible }: { setIsMobileMenuVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className="fixed xl:hidden z-10">
            <div className="relative">
                <div className="w-svw h-lvh bg-black opacity-30 menu-wrapper" />
                <div className="absolute top-0 z-10 w-svw px-6 py-8 bg-white menu-wrapper">
                    <div>
                        <CategoriesList onClick={() => setIsMobileMenuVisible(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}