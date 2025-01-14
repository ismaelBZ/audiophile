import Logo from "./../../../assets/logo.svg";
import { NavLink } from "react-router";
import facebookIcon from "./../../../assets/footer/icon-facebook.svg"
import xIcon from "./../../../assets/footer/icon-X.svg"
import instagramIcon from "./../../../assets/footer/icon-instagram.svg"

const Footer = () => {
    return (

        <footer className="px-6 pb-10 flex flex-col gap-[48px] items-center bg-shadow text-white">

            {/* Decoration Bar */}
            <div className="bg-peru w-[100px] h-[4px]"></div>

            {/* Logo */}
            <img src={Logo} alt="audiophile" />
            
            {/* Links - Navigation */}
            <nav>
                <ul className="flex flex-col gap-4">
                    <li className="text-center">
                        <NavLink className="font-bold text-sm tracking-[2px] uppercase" to="/">Home</NavLink>
                    </li>
                    <li className="text-center">
                        <NavLink className="font-bold text-sm tracking-[2px] uppercase" to="/Headphones">Headphones</NavLink>
                    </li>
                    <li className="text-center">
                        <NavLink className="font-bold text-sm tracking-[2px] uppercase" to="/Speakers">Speakers</NavLink>
                    </li>
                    <li className="text-center">
                        <NavLink className="font-bold text-sm tracking-[2px] uppercase" to="/Earphones">Earphones</NavLink>
                    </li>
                </ul>
            </nav>
            
            {/* Paragraph - About us */}
            <p className="text-center text-[15px] text-gray leading-6">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>

            {/* Copyrights */}
            <p className="font-bold text-[15px] text-gray">
                Copyright 2021. All Rights Reserved
            </p>

            {/* Social Media Links */}
            <ul className="flex gap-3" aria-label="Open Social Media in a new window">
                <li>
                    <NavLink to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="https://x.com/"  target="_blank" rel="noopener noreferrer">
                        <img src={xIcon} alt="X" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </NavLink>
                </li>
            </ul>
        </footer>
    )
}
export default Footer