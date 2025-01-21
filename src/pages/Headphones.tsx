import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import ProductCard from "../components/shared/ProductCard";
import CategoriesList from "../components/shared/CategoriesList";
import AboutUs from "../components/shared/AboutUs";

const Headphones = () => {
    return (
        <div className='mx-6 md:mx-10 lg:mx-14 xl:mx-20'>
            {/* General app margin */}

            {/* HEADER */}
            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Header isInHome={false} />
                <p className="p-8 lg:p-24 font-bold tracking-[2px] text-[28px] text-white text-center uppercase bg-black">Headphones</p>
            </div>


            {/* MAIN */}
            <main className="pt-16 pb-32 flex flex-col gap-32">

                {/* Products list */}
                <ul className="flex flex-col gap-28 sm:gap-32 
                ">
                    {/* If it's even reverse else (is's odd) normal */}
                    <li>
                        <ProductCard/>
                    </li>
                    <li>
                        <ProductCard  reverse/>
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                </ul>

                {/* Categories */}
                <CategoriesList />

                {/* About Us */}
                <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 2xl:mx-0 3xl:max-w-[1110px] 3xl:mx-auto">
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
export default Headphones