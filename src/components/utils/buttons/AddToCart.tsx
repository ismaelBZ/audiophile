import classnames from 'classnames';

const AddToCart = ({children="see product", className, onClick} : {children? : string, className?: string, onClick: React.MouseEventHandler<HTMLButtonElement>}) => {
    return (
        <button onClick={onClick} className={classnames('px-[26px] py-[17px] font-bold text-[13px] tracking-[1px] bg-peru text-white hover:bg-sandy uppercase', className)}>
            {children}
        </button>
    )
}

export default AddToCart