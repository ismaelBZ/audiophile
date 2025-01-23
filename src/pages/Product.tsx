import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ProductDetailed from "./../components/Product/ProductDetailed";
import AboutUs from "../components/shared/AboutUs";
import GoBack from "../components/utils/buttons/GoBack";
import CategoriesList from "../components/shared/CategoriesList";
import { SimilarProductList } from "../components/Product/SimilarProductList";
import Cart from "./../components/shared/Cart";

const Product = () => {
    return (
        <div className="mx-6 md:mx-10 lg:mx-14 xl:mx-20">
            {/* General App Margins */}
            
            {/* HEADER */}
            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Header isInHome={false} />
            </div>

            { /* CART */}
            {/* <Cart /> */}
            
            {/* Go Back Button */}
            <GoBack />

            {/* MAIN */}
            <main>

                {/* Product Detailed Card Component */}
                <div className="2xl:max-w-[1110px] 2xl:mx-auto">
                    <ProductDetailed />
                </div>

                {/* Similar Products List */}
                <div className="my-32 2xl:max-w-[1110px] 2xl:mx-auto">
                    <SimilarProductList />
                </div>

                {/* Category List */}
                <div className="2xl:max-w-[1110px] 2xl:mx-auto">
                    <CategoriesList />
                </div>

                {/* About Us */}
                <div className="my-32 -mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 2xl:max-w-[1110px] 2xl:mx-auto">
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
export default Product