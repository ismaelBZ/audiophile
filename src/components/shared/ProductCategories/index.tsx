import CategoryCard from "./CategoryCard";

const ProductCategories = () => {
    return (
        <nav aria-label="Access products categories by clicking on the links below">
            <ul className="mt-10 mb-24 sm:mb-28 flex flex-col gap-5">
                <li>
                    <CategoryCard />
                </li>
                <li>
                    <CategoryCard />
                </li>
                <li>
                    <CategoryCard />
                </li> 
            </ul>
        </nav>

    )
}

export default ProductCategories;