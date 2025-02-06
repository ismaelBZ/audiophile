import { Link } from 'react-router';
import classnames from 'classnames';

const PrimaryBtn = ({children="see product", className, to="", onClick} : {children? : string, className?: string, to: string, onClick?: React.MouseEventHandler<HTMLAnchorElement>}) => {
    return (
        <Link to={to} 
            onClick={onClick}
            className={classnames('px-[26px] py-[17px] font-bold text-[13px] tracking-[1px] bg-peru text-white hover:bg-sandy uppercase', className)}
        >
            {children}
        </Link>
    )
}

export default PrimaryBtn