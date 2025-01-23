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
        <div className='mx-6 md:mx-10 lg:mx-14 xl:mx-20'>
        {/* General app margins */}
            
            {/* HEADER */}
            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 absolute w-full">
                {/* Change the bg-color when is in home */}
                <Header isInHome={true} />
            </div>


            {/* MAIN */}
            <main>

                {/* Big initial card */}
                <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 ">
                    <MainProduct />
                </div>

                {/* Categories */}
                <div className="mt-10 mb-32">
                    <CategoriesList />
                </div>

                {/* Products List */}
                <ul className="flex flex-col gap-6">
                    <li className="xl:mx-auto xl:w-[100%] xl:max-w-[1110px] ">
                        <HighlightedProduct />
                    </li>
                    <li className="2xl:mx-auto 2xl:max-w-[1110px]">
                        <PopularProducts />
                    </li> 
                    <li className="xl:mx-auto xl:max-w-[1110px] ">
                        <TopRatedProduct />
                    </li>
                </ul>

                {/* About Us */}
                <div className="-mx-6 my-24 sm:my-28 md:-mx-10 lg:-mx-14 xl:max-w-[1110px] xl:mx-auto">
                    <AboutUs />
                </div>
            </main>


            {/* FOOTER */}
            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Footer />
            </div>
        </div>
    )
}

export default Home;