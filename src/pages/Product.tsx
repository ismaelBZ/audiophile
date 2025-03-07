// Hooks
import { useProductQuery } from "../hooks/querys/useProductsQuery";
import { useLoad } from "../hooks/useLoad";
// Components
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ProductDetailed from "./../components/Product/ProductDetailed";
import AboutUs from "../components/shared/AboutUs";
import GoBack from "../components/utils/buttons/GoBack";
import CategoriesList from "../components/shared/CategoriesList";
import { SimilarProductList } from "../components/Product/SimilarProductList";
import Loading from "../components/utils/loading";
import { useEffect } from "react";


const Product = () => {
    const { data: product, isLoading } = useProductQuery(window.location.pathname);
    useLoad();

    useEffect(() => {
        console.log("Render");

    })


    return (
        <div className="mx-6 md:mx-10 lg:mx-14 xl:mx-20">

            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Header />
            </div>

            {/* <GoBack /> */}

            { isLoading ?
                <Loading />
            :
                <main className="mt-[50px]">
                    <div className="2xl:w-lvw 2xl:-mx-20">
                        <div className="2xl:max-w-[1110px] 2xl:mx-auto">
                            <ProductDetailed product={product} key={product.id} />
                        </div>
                    </div>

                    <div className="my-32 2xl:max-w-[1110px] 2xl:mx-auto">
                        <SimilarProductList data={product.similarProducts} key={product.id}/>
                    </div>

                    <div className="2xl:max-w-[1110px] 2xl:mx-auto">
                        <CategoriesList />
                    </div>

                    <div className="my-32 -mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 2xl:max-w-[1110px] 2xl:mx-auto">
                        <AboutUs />
                    </div>
                </main>
            }

            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Footer />
            </div>
        </div>
    )
}
export default Product