// Hooks
import { useEffect, useState } from "react";
import { useStore } from "../../../stores/useStore";
import { useNavigation } from "../../../hooks/useNavigation";
//Component
import Cart from "../Cart";
import { MobileMenu, MobileMenuButton } from "./MobileMenu";
import { NavigationBar } from "./NavigationBar";
import { CartButton } from "./CartButton";
import { NavLink } from "react-router";
//images
import Logo from "./../../../assets/logo.svg";


const Header = ({bgColor} : {bgColor?: string}) => {
    const isShowingCart = useStore((state) => state.isShowingCart);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean>(false);
    useNavigation();
    
    useEffect(() => {
        
        isMobileMenuVisible 
            ? document.body.style.position = "fixed" 
            : document.body.style.position = "static";

    }, [ isMobileMenuVisible ])


    return (
        <div style={{backgroundColor: bgColor ||'black'}} >
            <header>   
                <div className="px-6 py-8 flex items-center justify-between border-b-[1px] border-[#2c2c2c]
                        md:px-10 lg:px-14 xl:px-20 2xl:max-w-[1110px] 2xl:mx-auto 2xl:px-0
                    " 
                >
                    <MobileMenuButton isMobileMenuVisible={isMobileMenuVisible} setIsMobileMenuVisible={setIsMobileMenuVisible} />
                    
                    <div className="flex items-center xl:gap-24 2xl:gap-36 3xl:gap-x-48">
                        <div>
                            <h1 className="sr-only">
                                AUDIOPHILE
                            </h1>
                            
                            <NavLink to="/" className="xl:hidden">
                                <img src={Logo} alt="" />
                            </NavLink>
                            
                            <img src={Logo} 
                                className="hidden xl:block" 
                                alt="" 
                            />
                        </div>
                        
                        <NavigationBar />
                    </div>
                    
                    <CartButton isShowingCart={isShowingCart} />
                </div>
            
                { isMobileMenuVisible && 
                    <MobileMenu setIsMobileMenuVisible={setIsMobileMenuVisible} />
                }
            </header>

            { isShowingCart &&
                <Cart />
            }
        </div>
    )
}

export default Header