import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
    return (
        <nav aria-label="Access products categories by clicking on the links below">
            <ul className="flex flex-col gap-5
                    lg:flex-row lg:gap-3
                    2xl:gap-8
                    3xl:max-w-[1110px] 3xl:mx-auto
            ">
                <li className="lg:grow">
                    <CategoryCard />
                </li>
                <li className="lg:grow">
                    <CategoryCard />
                </li>
                <li className="lg:grow">
                    <CategoryCard />
                </li> 
            </ul>
        </nav>

    )
}

export default CategoriesList;