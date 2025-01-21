import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import ProductCard from "../components/shared/ProductCard";
import CategoriesList from "../components/shared/CategoriesList";
import AboutUs from "../components/shared/AboutUs";

const Speakers = () => {
  return (
    <div className='mx-6 md:mx-10 lg:mx-14 xl:mx-20'>
        {/* General app margins */}

            {/* HEADER */}
            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Header isInHome={false} />
                <p className="p-8 lg:p-24 font-bold tracking-[2px] text-[28px] text-white text-center uppercase bg-black">Speakers</p>
            </div>
            
            
            {/* MAIN */}
            <main className='pt-16 pb-32 flex flex-col gap-32'>
                
                {/*Product List */}
                <ul className="flex flex-col gap-28 sm:gap-32">
                    <li><ProductCard /></li>
                    <li><ProductCard reverse/></li>
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
export default Speakers