import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import HeaderLayout from "./components/layout/header-layout";
import Footer from "./components/footer/footer";
import MainLayout from "./components/layout/main-layout";
import { Provider } from "react-redux";
import { store } from "./app/store";

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
