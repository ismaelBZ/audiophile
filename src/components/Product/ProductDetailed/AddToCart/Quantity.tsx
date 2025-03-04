const Quantity = ({quantity, handleQuantity} : {quantity: number, handleQuantity: (operation: 'increase' | 'decrease') => void}) => {
    return (
        <div className="w-fit flex flex-row gap-2 items-center bg-ice ">
            <button className="p-4"
                onClick={() => handleQuantity('decrease')}
            > - </button>

            <p className="font-bold">
                {quantity}
            </p>

            <button className="p-4"
                onClick={() => handleQuantity('increase')}
            > + </button>
        </div>
    )
}

export default Quantity