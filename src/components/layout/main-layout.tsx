import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
}
export default MainLayout;
