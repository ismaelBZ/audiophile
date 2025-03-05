// Hooks
import { useStore } from "../../../stores/useStore";
// Components
import { Link } from "react-router"

const GoBack = () => {
    const navegationHistory = useStore((state) => state.navigationHistory);

    return (
        <div className="2xl:max-w-[1110px] 2xl:mx-auto py-4 px-2">
            <Link to={navegationHistory[navegationHistory.length - 2]} 
                className='py-4 pr-4 text-[15px] text-gray' 
                aria-label="Click to return to previous page"
            >
                Go Back
            </Link>
        </div>
    )
}
export default GoBack