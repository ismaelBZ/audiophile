// Libs
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/queryClient.ts';
// components
import Home from "./pages/Home.tsx";
import Headphones from "./pages/Headphones.tsx";
import Speakers from "./pages/Speakers.tsx";
import Earphones from "./pages/Earphones.tsx";
import Product from './pages/Product.tsx';
import Checkout from './pages/Checkout.tsx';
// styles
import './index.css';


const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/headphones' element={<Headphones />} />
                    <Route path='/speakers' element={<Speakers />} />
                    <Route path='/earphones' element={<Earphones />} />
                    <Route path="/:category/:id" element={<Product />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App