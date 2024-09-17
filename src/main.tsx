import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {AppRoutes} from './router';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppRoutes/>,
//   },
// ]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes></AppRoutes>
        </BrowserRouter>
    </React.StrictMode>
)