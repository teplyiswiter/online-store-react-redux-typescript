import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

function HeaderLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
export default HeaderLayout;
