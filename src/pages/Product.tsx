//Lib
import queryClient from "../lib/queryClient";
// Hooks
import { useLocation } from "react-router";
import { useStore } from "../stores/useStore";
import { useProductQuery } from "../querys/useProductsQuery";
// Components
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ProductDetailed from "./../components/Product/ProductDetailed";
import AboutUs from "../components/shared/AboutUs";
import GoBack from "../components/utils/buttons/GoBack";
import CategoriesList from "../components/shared/CategoriesList";
import { SimilarProductList } from "../components/Product/SimilarProductList";
import Loading from "../components/utils/loading";


const Product = () => {
    const { data, isLoading } = useProductQuery();
    const {pathname: pathName} = useLocation();
    const previousPath = useStore((state) => state.urlPath);
    const setUrlPath = useStore((state) => state.setUrlPath);
    
    if (pathName !== previousPath) {
        setUrlPath(pathName);
        queryClient.invalidateQueries({queryKey: ["product"]});
    }

    return (
        <div className="mx-6 md:mx-10 lg:mx-14 xl:mx-20">
            {/* General App Margins */}

            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Header />
            </div>

            <GoBack />

            {isLoading ?
                <Loading />
                :
                <main>
                    {data &&
                        <>
                            {/* Product Detailed Card Component */}
                            <div className="2xl:w-lvw 2xl:-mx-20">
                                <div className="2xl:max-w-[1110px] 2xl:mx-auto">
                                    <ProductDetailed product={data} />
                                </div>
                            </div>

                            {/* Similar Products List */}
                            <div className="my-32 2xl:max-w-[1110px] 2xl:mx-auto">
                                <SimilarProductList similarProducts={data.similarProducts} />
                            </div>
                        </>
                    }

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