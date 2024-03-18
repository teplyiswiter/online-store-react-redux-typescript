import { useAppSelector } from "../../app/hooks";
import Navbar from "./navbar/navbar";

const menuItems = [
    { to: "/contact", name: "Contacts" },
    { to: "/products", name: "Products" },
];

function Header() {
    // Hide sticky header when modal is shown
    const { isShown: isModalShown } = useAppSelector((state) => state.modal);

    return (
        <header className={`${!isModalShown ? "sticky" : ""} top-0 z-50`}>
            <Navbar items={menuItems} />
        </header>
    );
}
export default Header;
