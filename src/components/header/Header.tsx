import Navbar from "./navbar/navbar";

const menuItems = [
    { to: "/contact", name: "Contacts" },
    { to: "/products", name: "Products" },
];

function Header() {
    return (
        <header className="">
            <Navbar items={menuItems} />
        </header>
    );
}
export default Header;
