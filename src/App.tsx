import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import HeaderLayout from "./components/layout/header-layout";
import MainLayout from "./components/layout/main-layout";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Products from "./pages/products";
import ProductDetails from "./components/products/product-details";

const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: "/",
                        index: true,
                        element: <Homepage />,
                    },
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                    {
                        path: "/products",
                        children: [
                            {
                                index: true,
                                element: <Products />,
                            },
                            {
                                path: ":category/:productId",
                                element: <ProductDetails />,
                            },
                        ],
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
