import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4">

            {/* Logo */}
            <div className="flex-1">
                <Link to="/" className="text-xl font-bold text-green-700">
                    QurbaniHat
                </Link>
            </div>

            {/* Menu */}
            <div className="flex gap-4">
                <NavLink to="/" className="btn btn-ghost">Home</NavLink>
                <NavLink to="/animals" className="btn btn-ghost">All Animals</NavLink>
            </div>

            {/* Auth Buttons (temporary) */}
            <div className="flex gap-2">
                <button className="btn btn-sm btn-outline">Login</button>
                <button className="btn btn-sm btn-primary">Register</button>
            </div>

        </div>
    );
};

export default Navbar;