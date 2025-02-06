import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import ProductCard from "../components/shared/ProductCard";
import CategoriesList from "../components/shared/CategoriesList";
import AboutUs from "../components/shared/AboutUs";
import { ProductCard_T } from "../types/pages/productCard/ProductCard_T";

const fetchData = async () => {
    const response = await fetch("http://localhost:3000/speakers");
    const data = await response.json();
    return data;
} 

const data = await fetchData();


// const mockData = {
//     products: [ 
//         {
//             productName: "XX99 Mark II Headphones",
//             description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
//             newProduct: true,
//             productUrl: "",
//             categoryImages: {
//                 mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-mobile.jpg?updatedAt=1737571367439",
//                 tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-tablet.jpg?updatedAt=1737571402974",
//                 desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-desktop.jpg?updatedAt=1737571403081"
//             },
//         },
//         {
//             productName: "XX99 Mark II Headphones",
//             description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
//             newProduct: true,
//             productUrl: "",
//             categoryImages: {
//                 mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-mobile.jpg?updatedAt=1737571367439",
//                 tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-tablet.jpg?updatedAt=1737571402974",
//                 desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-desktop.jpg?updatedAt=1737571403081"
//             },
//         },
//         {
//             productName: "XX99 Mark II Headphones",
//             description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
//             newProduct: true,
//             productUrl: "",
//             categoryImages: {
//                 mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-mobile.jpg?updatedAt=1737571367439",
//                 tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-tablet.jpg?updatedAt=1737571402974",
//                 desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/Category/image-category-desktop.jpg?updatedAt=1737571403081"
//             }
//         }
//     ],
// }

const Speakers = () => {
    return (
        <div className='mx-6 md:mx-10 lg:mx-14 xl:mx-20 '>
            {/* General app margin */}

            {/* HEADER */}
            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
                <Header isInHome={false}/>
                <p className="p-8 lg:p-24 font-bold tracking-[2px] text-[28px] text-white text-center uppercase bg-black">Speakers</p>
            </div>


            {/* MAIN */}
            <main className="pt-16 pb-32 flex flex-col gap-32">

                {/* Products list */}
                <ul className="flex flex-col gap-28 sm:gap-32 3xl:w-lvw 3xl:-mx-20
                ">
                    {/* If it's even reverse else (is's odd) normal */}
                    {data.map((product: ProductCard_T, index: number) => {
                        if (index % 2 == 0) {
                            return (
                                <li key={index}>
                                    <ProductCard product={product} reverse historyUrl="/speakers" />
                                </li>
                            );
                        } else {
                            return (
                                <li key={index}>
                                    <ProductCard product={product} historyUrl="/speakers"/>
                                </li>
                            )

                        }
                    })}
                </ul>

                {/* Categories */}
                <CategoriesList />

                {/* About Us */}
                <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 2xl:mx-0 3xl:max-w-[1110px] 3xl:mx-auto">
                    <AboutUs  />
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