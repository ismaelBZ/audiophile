import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import MainProduct from "../components/home/MainProduct";
import ProductList from "../components/shared/ProductCategories";
import HighlightedProduct from "../components/home/HighlightedProduct";
import PopularProducts from "../components/home/PopularProducts";
import TopRatedProduct from "../components/home/TopRatedProduct";
import AboutUs from "../components/shared/AboutUs";


const Home = () => {
    return (
        <div className='mx-6'>
        {/* General app margins */}

            {/* The negative margins keep the full width, padding is set inside component*/}
            <div className="-mx-6 absolute w-full">
                {/* Change the bg-color when is in home */}
                <Header isInHome={true} />
            </div>

            <main>
                {/* Big initial card */}
                <div className="-mx-6">
                    <MainProduct />
                </div>

                {/* Categories list - card navegation */}
                <ProductList />


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
                <div className="-mx-6 my-24 sm:my-28">
                    <AboutUs />
                </div>

            </main>


            {/* The negative margins keep the full width, padding is set inside component*/}
            <div className="-mx-6">
                <Footer />
            </div>
        </div>
    )
}

export default Home;