import React from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import About from '../pages/About/About.jsx'
import Companies from '../pages/Companies/Companies.jsx'
import Home from '../pages/Home/Home.jsx'
import Login from '../pages/Login/Login.jsx'
import News from '../pages/News/News.jsx'
import Partnerships from '../pages/Partnerships/Partnerships.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
  
    {
        path: "/companies",
        element: <Companies />,
    },
  
    {
        path: "/news",
        element: <News />,
    },

    {
        path: "/about",
        element: <About />,
    },

    {
        path: "/login",
        element: <Login />,
    },

    {
        path: "/partnerships",
        element: <Partnerships />,
    },
  
]);

export default function  Routes() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}