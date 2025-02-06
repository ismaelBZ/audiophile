import { Link } from "react-router"
import { useNavegationHistoryContext } from "../../../context/navegationsHistoryContext"

const GoBack = () => {
    const {navegationHistory} = useNavegationHistoryContext();

    return (
        <div className="2xl:max-w-[1110px] 2xl:mx-auto py-4 px-2">
            <Link to={navegationHistory[0]} className='py-4 pr-4 text-[15px] text-gray' aria-label="Click to return to previous page">Go Back</Link>
        </div>
    )
}
export default GoBack