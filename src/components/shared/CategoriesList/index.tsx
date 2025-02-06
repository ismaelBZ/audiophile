import CategoryCard from "./CategoryCard";
import { useSharedData } from "../../../context/sharedContext";

const CategoriesList = () => {
    const {categories} = useSharedData();
    
    return (
        <nav aria-label="Access products categories by clicking on the links below">
            <ul className="flex flex-col gap-5
                    lg:flex-row lg:gap-3
                    2xl:gap-8
                    2xl:max-w-[1110px] 2xl:mx-auto"
            >
                <li className="lg:grow">
                    <CategoryCard to="/headphones" name={categories.headphones.name} imgUrl={categories.headphones.imgUrl} />
                </li>
                <li className="lg:grow">
                    <CategoryCard to="/speakers" name={categories.speakers.name} imgUrl={categories.speakers.imgUrl} />
                </li>
                <li className="lg:grow">
                    <CategoryCard to="/earphones" name={categories.earphones.name} imgUrl={categories.earphones.imgUrl} />
                </li> 
            </ul>
        </nav>

    )
}

export default CategoriesList;