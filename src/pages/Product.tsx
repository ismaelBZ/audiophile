import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ProductDetailed from "./../components/Product/ProductDetailed";
import AboutUs from "../components/shared/AboutUs";
import GoBack from "../components/utils/buttons/GoBack";
import CategoriesList from "../components/shared/CategoriesList";
import { SimilarProductList } from "../components/Product/SimilarProductList";
import { Product_T } from "../types/Product_T";


const mockData = {
    productName: "XX99 Mark II Headphones",
    thumbName: "XX99 MK II",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: [ 
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
    ],
    price: 2999,
    newProduct: true,
    images: {
        thumbUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/thumb.png?updatedAt=1737456129780",
        mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/image-product-mobile.jpg?updatedAt=1737483659719",
        tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/image-product-tablet.jpg?updatedAt=1737483680172",
        desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/image-product-desktop.jpg?updatedAt=1737483718730",
        detailedImages: {
            mobileImages: ["https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Mobile/image-gallery-1.jpg?updatedAt=1737496716048", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Mobile/image-gallery-2.jpg?updatedAt=1737496715963", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Mobile/image-gallery-3.jpg?updatedAt=1737496716364"],
            desktopImages: ["https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Tablet/image-gallery-1.jpg?updatedAt=1737496737407", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Tablet/image-gallery-2.jpg?updatedAt=1737496737439", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Tablet/image-gallery-3.jpg?updatedAt=1737496737735"],
            tabletImages: ["https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Desktop/image-gallery-1.jpg?updatedAt=1737496759522", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Desktop/image-gallery-2.jpg?updatedAt=1737496759301", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Desktop/image-gallery-3.jpg?updatedAt=1737496759224"]
        }
    },
    boxContent: [
        {
            quantity: 1,
            item: "Headphone unit"
        },
        {
            quantity: 2,
            item: "Replacement earcups"
        },
        {
            quantity: 1,
            item: "User manual"
        },
        {
            quantity: 1,
            item: "3.5mm 5m audio cable"
        },
        {
            quantity: 1,
            item: "Travel bag"
        },
    ],
    similarProducts: [
        {
            productName: "XX99 MARK I",
            productUrl: "",
            images: {
                mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20I/Similar/xx99-mark-one-mobile.jpg?updatedAt=1737506941124",
                tabletUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20I/Similar/xx99-mark-one-tablet.jpg?updatedAt=1737507120053",
                desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20I/Similar/xx99-mark-one-desktop.jpg?updatedAt=1737507204951"
            }
        },
        {
            productName: "XX59",
            productUrl: "",
            images: {
                mobileUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/XX59%20/similar/xx59-mobile.jpg?updatedAt=1737507323271",
                tabletUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/XX59%20/similar/xx59-tablet.jpg?updatedAt=1737507344902",
                desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/XX59%20/similar/xx59-desktop.jpg?updatedAt=1737507352720"
            }
        },
        {
            productName: "ZX9 SPEAKER",
            productUrl: "",
            images: {
                mobileUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Speakers/ZX9/Similar/zx9-mobile.jpg?updatedAt=1737507528246",
                tabletUrl:  "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Speakers/ZX9/Similar/zx9-tablet.jpg?updatedAt=1737507528410",
                desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Speakers/ZX9/Similar/zx9-desktop.jpg?updatedAt=1737507514184"
            }
        }
    ],
}

const Product = () => {
    const [data, setData] = useState<Product_T>()
    const pathParam = useParams();
    
    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/${pathParam?.category}/${pathParam?.id}`)
            const json: Product_T = await response.json();
            setData(json);
        }
        
        fetchData().catch(console.error);
    }, [pathParam])
    
    return (
        <div className="mx-6 md:mx-10 lg:mx-14 xl:mx-20">
            {/* General App Margins */}
            
            {/* HEADER */}
            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Header isInHome={false} />
            </div>

            {/* Go Back Button */}
            <GoBack />

            {/* MAIN */}
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