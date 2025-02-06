import { Link } from "react-router"

const SecondaryBtn = ({ to = "", onClick } : { to: string, onClick?: React.MouseEventHandler<HTMLAnchorElement> }) => {
    return (
        <Link to={to} 
            onClick={onClick}
            className='px-[25px] py-[16px] font-bold text-[13px] tracking-[1px] bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white'
        >
            SEE PRODUCT
        </Link>
    )
}
export default SecondaryBtn