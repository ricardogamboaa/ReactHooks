import { createBrowserRouter } from "react-router-dom";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { AboutPage, HomePage, LoginPage, MainApp } from "./09-useContext";
import { ErrorPage } from "./ErrorPage";

export const Routes = {
    getRoutes : () => createBrowserRouter([
        {
            path: "/",
            element: <MainApp />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "login",
                    element: <LoginPage />,
                },
                {
                    path: "about",
                    element: <AboutPage />,
                },
                {
                    path: "testing",
                    element: <MultipleCustomHooks />,
                }
            ]
        }
    ])
}