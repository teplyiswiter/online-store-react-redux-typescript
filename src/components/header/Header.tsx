import Navbar from "./navbar/navbar";

const menuItems = [
    { to: "/contact", name: "Contacts" },
    { to: "/products", name: "Products" },
];

function Header() {
    return (
        <header className="sticky top-0 z-50">
            <Navbar items={menuItems} />
        </header>
    );
}
export default Header;
