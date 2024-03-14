import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <main className="container mx-auto">
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
}
export default MainLayout;
