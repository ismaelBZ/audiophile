import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import MainProduct from "../components/Home/MainProduct";
import CategoriesList from "../components/shared/CategoriesList";
import HighlightedProduct from "../components/Home/HighlightedProduct";
import PopularProducts from "../components/Home/PopularProducts";
import TopRatedProduct from "../components/Home/TopRatedProduct";
import AboutUs from "../components/shared/AboutUs";


const Home = () => {
    return (
        <div className='mx-6'>
        {/* General app margins */}
            
            {/* HEADER */}
            <div className="-mx-6 absolute w-full">
                {/* Change the bg-color when is in home */}
                <Header isInHome={true} />
            </div>


            {/* MAIN */}
            <main>

                {/* Big initial card */}
                <div className="-mx-6">
                    <MainProduct />
                </div>

                {/* Categories */}
                <div className="mt-10 mb-32">
                    <CategoriesList />
                </div>

                {/* Products List */}
                <ul className="flex flex-col gap-6">
                    <li>
                        <HighlightedProduct />
                    </li>
                    <li>
                        <PopularProducts />
                    </li>
                    <li>
                        <TopRatedProduct />
                    </li>
                </ul>

                {/* About Us */}
                <div className="-mx-6 my-24 sm:my-28 md:-mx-10 lg:-mx-14">
                    <AboutUs />
                </div>
            </main>


            {/* FOOTER */}
            <div className="-mx-6">
                <Footer />
            </div>
        </div>
    )
}

export default Home;