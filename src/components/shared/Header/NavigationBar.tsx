import { NavLink } from "react-router";

export const NavigationBar = () => {
    return (
        <ul className="hidden xl:flex md:gap-4 xl:gap-7">
            <li className="font-bold text-[13px] tracking-[2px] text-white uppercase">
                <NavLink to="/" >
                    home
                </NavLink>
            </li>
            <li className="font-bold text-[13px] tracking-[2px] text-white uppercase">
                <NavLink to="/headphones">
                    headphones
                </NavLink>
            </li>
            <li className="font-bold text-[13px] tracking-[2px] text-white uppercase">
                <NavLink to="/speakers">
                    speakers
                </NavLink>
            </li>
            <li className="font-bold text-[13px] tracking-[2px] text-white uppercase">
                <NavLink to="/earphones">
                    earphones
                </NavLink>
            </li>
        </ul>
  )
}