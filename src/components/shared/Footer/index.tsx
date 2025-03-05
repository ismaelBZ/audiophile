import Logo from "./../../../assets/logo.svg";
import { NavLink } from "react-router";
import facebookIcon from "./../../../assets/footer/icon-facebook.svg"
import xIcon from "./../../../assets/footer/icon-X.svg"
import instagramIcon from "./../../../assets/footer/icon-instagram.svg"

const Footer = () => {

    console.log("Footer")

    return (
        <div className="bg-shadow">
            <footer 
                className="px-6 pb-10 flex flex-col gap-[48px] items-center
                    md:px-10 lg:px-14 xl:px-20 2xl:max-w-[1110px] 2xl:mx-auto 2xl:px-0
                "
            >
                <div className="bg-peru w-[100px] h-[4px]"></div>
                
                <img src={Logo} alt="audiophile" />
                
                <nav>
                    <ul className="flex flex-col gap-4">
                        <li className="text-center">
                            <NavLink to="/" className="font-bold text-sm text-white tracking-[2px] uppercase">
                                Home
                            </NavLink>
                        </li>
                        <li className="text-center">
                            <NavLink to="/headphones" className="font-bold text-sm text-white tracking-[2px] uppercase">
                                Headphones
                            </NavLink>
                        </li>
                        <li className="text-center">
                            <NavLink to="/speakers" className="font-bold text-sm text-white tracking-[2px] uppercase">
                                Speakers
                            </NavLink>
                        </li>
                        <li className="text-center">
                            <NavLink to="/earphones" className="font-bold text-sm text-white tracking-[2px] uppercase">
                                Earphones
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                
                <p className="text-center text-[15px] text-gray leading-6">
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
                    Come and visit our demo facility - we’re open 7 days a week.
                </p>

                <p className="font-bold text-[15px] text-gray">
                    Copyright 2021. All Rights Reserved
                </p>

                <ul className="flex gap-3" aria-label="Open Social Media in a new window">
                    <li>
                        <NavLink to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ facebookIcon } alt="Facebook" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="https://x.com/"  target="_blank" rel="noopener noreferrer">
                            <img src={ xIcon } alt="X" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ instagramIcon } alt="Instagram" />
                        </NavLink>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
export default Footer