import CategoryCard from "./CategoryCard";

const data = {
        headphones: {
            name: "headphones",
            imgUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Categories/image-category-thumbnail-headphones.png?updatedAt=1737568949599"
        },
        speakers: {
            name: "speakers",
            imageUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Categories/image-category-thumbnail-speakers.png?updatedAt=1737568950135"
        },
        earphones: {
            name: "earphones",
            imgUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Categories/image-category-thumbnail-earphones.png?updatedAt=1737568950620"
        }
}

const CategoriesList = () => {
    return (
        <nav aria-label="Access products categories by clicking on the links below">
            <ul className="flex flex-col gap-5
                    lg:flex-row lg:gap-3
                    2xl:gap-8
                    3xl:max-w-[1110px] 3xl:mx-auto
            ">
                <li className="lg:grow">
                    <CategoryCard name={data.headphones.name} imgUrl={data.headphones.imgUrl} />
                </li>
                <li className="lg:grow">
                    <CategoryCard name={data.speakers.name} imgUrl={data.speakers.imageUrl} />
                </li>
                <li className="lg:grow">
                    <CategoryCard name={data.earphones.name} imgUrl={data.earphones.imgUrl} />
                </li> 
            </ul>
        </nav>

    )
}

export default CategoriesList;