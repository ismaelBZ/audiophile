import classnames from 'classnames';

const PrimaryBtn = ({children = "see product", className} : {children? : string, className?: string}) => {
    return (
        <button className={classnames('px-[26px] py-[17px] font-bold text-[13px] tracking-[1px] bg-peru text-white hover:bg-sandy uppercase', className)}>
            {children}
        </button>
    )
}

export default PrimaryBtn