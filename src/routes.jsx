import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Index";
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },
    {
        path: "/usuarios",
        element: <ListUsers />
    }
])

export default router;