// Hooks
import { useEarphonesQuery } from "../hooks/querys/useEarphonesQuery";
import { useLoad } from "../hooks/useLoad";

// Types
import { ProductCard_T } from "../types/pages/productCard/ProductCard_T";
// Components
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import ProductCard from "../components/shared/ProductCard";
import CategoriesList from "../components/shared/CategoriesList";
import AboutUs from "../components/shared/AboutUs";
import Loading from "../components/utils/loading";


const Earphones = () => {
    const {data, isLoading} = useEarphonesQuery();
    useLoad();

    return (
        <div className='mx-6 md:mx-10 lg:mx-14 xl:mx-20'>

            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Header />
                <p className="p-8 lg:p-24 font-bold tracking-[2px] text-[28px] text-white text-center uppercase bg-black">earphones</p>
            </div>

            { isLoading ?
                <Loading />
            :
                <main className="pt-16 pb-32 flex flex-col gap-32">
                    <ul className="flex flex-col gap-28 sm:gap-32 3xl:w-lvw 3xl:-mx-20">
                        { data?.map((product: ProductCard_T, index: number) => {
                            if (index % 2 == 0) {
                                return (
                                    <li key={index}>
                                        <ProductCard product={product} reverse />
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={index}>
                                        <ProductCard product={product} />
                                    </li>
                                )
                            }
                        })}
                    </ul>

                    <CategoriesList />

                    <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 2xl:mx-0 3xl:max-w-[1110px] 3xl:mx-auto">
                        <AboutUs  />
                    </div>
                    
                </main>
            }

            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Footer />
            </div>
        </div>
    )
}

export default Earphones