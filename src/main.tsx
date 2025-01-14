import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Headphones from "./pages/Headphones.tsx";
import Speakers from "./pages/Speakers.tsx";
import Earphones from "./pages/Earphones.tsx";
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Headphones' element={<Headphones />} />
                <Route path='/Speakers' element={<Speakers />} />
                <Route path='/Earphones' element={<Earphones />} />
            </Routes>
        </BrowserRouter>
        <p>App Running - main.tsx</p>
    </StrictMode>,
)
