import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Headphones from "./pages/Headphones.tsx";
import Speakers from "./pages/Speakers.tsx";
import Earphones from "./pages/Earphones.tsx";
import Product from './pages/Product.tsx';
import Checkout from './pages/Checkout.tsx';
import './index.css';

import { SharedContext } from './data/context/sharedData.tsx';

const sharedData = {
    categories: {
        headphones: {
            name: "headphones",
            imgUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Categories/image-category-thumbnail-headphones.png?updatedAt=1737568949599"
        },
        speakers: {
            name: "speakers",
            imgUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Categories/image-category-thumbnail-speakers.png?updatedAt=1737568950135"
        },
        earphones: {
            name: "earphones",
            imgUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Categories/image-category-thumbnail-earphones.png?updatedAt=1737568950620"
        }
    },
    aboutUs: {
        title: 'Bringing you the <span className="text-peru">best</span> audio gear',
        description: [
            "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
        ],
        imageGallery: {
            mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/AboutUs/image-best-gear-mobile.jpg?updatedAt=1737570135107",
            tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/AboutUs/image-best-gear-tablet.jpg?updatedAt=1737570166580",
            desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/AboutUs/image-best-gear-desktop.jpg?updatedAt=1737570166868"
        }
    }
}


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SharedContext.Provider value={sharedData}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/headphones' element={<Headphones />} />
                    <Route path='/speakers' element={<Speakers />} />
                    <Route path='/earphones' element={<Earphones />} />
                    <Route path="/product" element={<Product />} /> 
                    <Route path="/checkout" element={<Checkout />} /> 
                </Routes>
            </BrowserRouter>
        </SharedContext.Provider>
    </StrictMode>
)
