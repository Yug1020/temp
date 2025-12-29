import { React, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Resmenu from "./src/components/Resmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { lazy } from "react";
import ShimmerUI from "./src/components/ShimmerUI";

const Grocery = lazy(() => import("./src/components/Grocery"))


const App = () => {
    return(
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

const router = createBrowserRouter([
    {   
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path:"/restaurant_menu/:res_id",
                element:<Resmenu></Resmenu>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback = {<ShimmerUI></ShimmerUI>} > <Grocery></Grocery> </Suspense> 
            },
            {
                path:"/*",
                element:<Error></Error>
            }
            
        ],
        // errorElement:<Error></Error>,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>);
