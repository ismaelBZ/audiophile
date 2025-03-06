// Hooks
import { useCategoriesQuery } from "../../../hooks/querys/useCategoriesQuery";
// Components
import CategoryCard from "./CategoryCard";

const CategoriesList = ({onClick} : {onClick?: () => void}) => {
    const {data} = useCategoriesQuery();

    
    return (
        <>
            {data && 
                <nav aria-label="Access products categories by clicking on the links below">
                    <ul className="flex flex-col gap-5
                            lg:flex-row lg:gap-3 2xl:gap-8 2xl:max-w-[1110px] 2xl:mx-auto"
                    >
                        <li className="lg:grow">
                            <CategoryCard to="/headphones" 
                                name={ data.headphones.name } 
                                imgUrl={ data.headphones.imgUrl } 
                                onClick={ onClick }
                            />
                        </li>
                        <li className="lg:grow">
                            <CategoryCard to="/speakers" 
                                name={ data.speakers.name } 
                                imgUrl={ data.speakers.imgUrl } 
                                onClick={ onClick }
                            />
                        </li>
                        <li className="lg:grow">
                            <CategoryCard to="/earphones" 
                                name={ data.earphones.name } 
                                imgUrl={ data.earphones.imgUrl } 
                                onClick={ onClick }
                            />
                        </li> 
                    </ul>
                </nav>
            }
        </>

    )
}

export default CategoriesList;