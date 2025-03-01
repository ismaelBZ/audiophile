import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import HeroProduct from "../components/Home/HeroProduct";
import CategoriesList from "../components/shared/CategoriesList";
import HighlightedProduct from "../components/Home/HighlightedProduct";
import PopularProducts from "../components/Home/PopularProducts";
import TopRatedProduct from "../components/Home/TopRatedProduct";
import AboutUs from "../components/shared/AboutUs";


// const mockData = {
//     heroProduct: {
//         productName: "XX99 Mark II Headphones",
//         description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
//         newProduct: true,
//         images: {
//             mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Hero/hero-mobile.jpg?updatedAt=1737574869545",
//             tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Hero/hero-tablet.jpg?updatedAt=1737574869478",
//             desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Hero/hero-desktop.jpg?updatedAt=1737574869498"
//         }
//     },
//     highlightedProduct: {
//         productName: "ZX9 SPEAKER",
//         description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
//         images: {
//             mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/hightlighted/highlighted-mobile.png?updatedAt=1737574969886",
//             tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/hightlighted/hightlighted-tablet.png?updatedAt=1737574969735",
//             desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/hightlighted/highlighted-desktop.png?updatedAt=1737574940509"
//         },
//         patternUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/hightlighted/pattern-circles.svg?updatedAt=1737605090450"
//     },
//     popularProduct: {
//         productName: "ZX7 SPEAKER",
//         images: {
//             mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Popular/popular-mobile.jpg?updatedAt=1737575161067",
//             tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Popular/popular-tablet.jpg?updatedAt=1737575130779",
//             desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/Popular/popular-desktop.jpg?updatedAt=1737575159792"
//         }
//     }, 
//     topRatedProduct: {
//         productName: "YX1 EARPHONES",
//         images: {
//             mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/top-rated/topRated-mobile.jpg?updatedAt=1737575234773",
//             tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/top-rated/topRated-tablet.jpg?updatedAt=1737575235087",
//             desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Home/22-01-25/top-rated/topRated-desktop.jpg?updatedAt=1737575234966"
//         }
//     }
// }

const fecthData =  async () => {
    const request = await fetch("http://localhost:3000/home");
    const data = await request.json();
    return data;
}

const data = await fecthData();

const Home = () => {
    return (
        <div className='mx-6 md:mx-10 lg:mx-14 xl:mx-20'
        >
        {/* General app margins */}
            
            {/* HEADER */}
            <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 absolute w-svw">
                {/* Change the bg-color when is in home */}
                <Header isInHome={true} />
            </div>

            {/* MAIN */}
            <main>
                {/* Hero Product */}
                <div className="-mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20 ">
                    <HeroProduct product={data.heroProduct}/>
                </div>

                {/* Categories */}
                <div className="mt-10 mb-32">
                    <CategoriesList />
                </div>

                {/* Highlight Products */}
                <ul className="flex flex-col gap-6">
                    <li className="xl:mx-auto xl:w-[100%] xl:max-w-[1110px] ">
                        <HighlightedProduct product={data.highlightedProduct} />
                    </li>
                    <li className="2xl:mx-auto 2xl:max-w-[1110px]">
                        <PopularProducts product={data.popularProduct} />
                    </li> 
                    <li className="xl:mx-auto xl:max-w-[1110px] ">
                        <TopRatedProduct product={data.topRatedProduct} />
                    </li>
                </ul>

                {/* About Us */}
                <div className="-mx-6 my-24 sm:my-28 md:-mx-10 lg:-mx-14 xl:-mx-20 2xl:mx-auto 2xl:max-w-[1110px] ">
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