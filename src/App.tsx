import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import HeaderLayout from "./components/layout/header-layout";
import MainLayout from "./components/layout/main-layout";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Products from "./pages/products";

const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: "/",
                        element: <Homepage />,
                    },
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                    {
                        path: "/products",
                        element: <Products />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider
                router={router}
                fallbackElement={<p>Loading...</p>}
            />
        </Provider>
    );
}

export default App;
