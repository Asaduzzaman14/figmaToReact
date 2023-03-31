import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../components/About";
import JobPortal from "../page/JobPortal";
import CompanyPofile from "../page/CompanyPofile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <About />,
            },
            {
                path: "page1",
                element: <About />,
            },
            {
                path: "page2",
                element: <CompanyPofile />,
            },
            {
                path: "page3",
                element: <JobPortal />,
            },


        ],
    },

]);

export default routes;
