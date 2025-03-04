import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context/AppProvider.tsx';
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProvider >
            <App />
        </AppProvider>
    </StrictMode>
)
