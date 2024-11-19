import Layout from "@/layout/Layout";
import Ressources from "@/pages/secure/ressources/Ressources";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout />,
        children:[
            {
                path: "ressources",
                element: <Ressources/>
            }
        ]
    }
])