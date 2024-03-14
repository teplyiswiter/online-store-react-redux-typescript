import { Link, NavLink } from "react-router-dom";

type NavbarProps = {
    items: { to: string; name: string }[];
};
function Navbar({ items }: NavbarProps) {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <NavLink to="/">Products store</NavLink>
            </div>
            <div>
                {items.map(({ to, name }) => (
                    <Link
                        to={to}
                        className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
                    >
                        {name}
                    </Link>
                ))}
            </div>
            <div></div>
        </nav>
    );
}
export default Navbar;
