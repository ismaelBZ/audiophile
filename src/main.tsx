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

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/headphones' element={<Headphones />} />
                <Route path='/speakers' element={<Speakers />} />
                <Route path='/earphones' element={<Earphones />} />
                <Route path="/product" element={<Product />} /> 
                <Route path="/checkout" element={<Checkout />} /> 
                {/* get the category from data and mount path like that
                    headphones  /headphone?id=
                    speakers    /speaker?id=
                    earphones   /earphone?id=
                  */}
            </Routes>
        </BrowserRouter>
        <p>App Running - main.tsx</p>
    </StrictMode>,
)
