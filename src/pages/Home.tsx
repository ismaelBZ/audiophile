// Hooks
import { useHomeQuery } from "../querys/useHomeQuery";
// Components
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import HeroProduct from "../components/home/HeroProduct";
import CategoriesList from "../components/shared/CategoriesList";
import HighlightedProduct from "../components/home/HighlightedProduct";
import PopularProduct from "../components/home/PopularProducts";
import TopRatedProduct from "../components/home/TopRatedProduct";
import AboutUs from "../components/shared/AboutUs";
// Icons
import Loading from "../components/utils/loading";


const Home = () => {
    const { isLoading } = useHomeQuery();

    return (
        <div className='mx-6 md:mx-10 lg:mx-14 xl:mx-20'>
            {/* General app margins */}
            
            {isLoading ?
                <>
                    <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                        <Header />
                    </div>

                    <Loading />

                    <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                        <Footer />
                    </div>
                    
                </>
            :
                <>
                    <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 absolute w-svw">
                        <Header bgColor="transparent" />
                    </div>

                    <main>
                        <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 ">
                            <HeroProduct />
                        </div>

                        <div className="mt-10 mb-32">
                            <CategoriesList />
                        </div>

                        <ul className="flex flex-col gap-6">
                            <li className="xl:mx-auto xl:w-[100%] xl:max-w-[1110px] ">
                                <HighlightedProduct />
                            </li>*
                            <li className="2xl:mx-auto 2xl:max-w-[1110px]">
                                <PopularProduct />
                            </li>
                            <li className="xl:mx-auto xl:max-w-[1110px] ">
                                <TopRatedProduct />
                            </li>
                        </ul>

                        <div className="-mx-6 my-24 sm:my-28 md:-mx-10 lg:-mx-14 xl:-mx-20 2xl:mx-auto 2xl:max-w-[1110px] ">
                            <AboutUs />
                        </div>
                    </main>

                    <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                        <Footer />
                    </div>
                </>
            }
        </div>
    )
}

export default Home;