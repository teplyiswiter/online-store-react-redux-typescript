import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Modal from "../modal/modal";

function HeaderLayout() {
    return (
        <>
            <Modal />
            <Header />
            <Outlet />
        </>
    );
}
export default HeaderLayout;
