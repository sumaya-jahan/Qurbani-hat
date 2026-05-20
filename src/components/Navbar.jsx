import { useContext } from "react";

import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {

        logoutUser()
            .then(() => {
                console.log("logout successful");
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const links = (
        <>
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/animals">
                    All Animals
                </NavLink>
            </li>

            {
                user && (
                    <li>
                        <NavLink to="/my-profile">
                            My Profile
                        </NavLink>
                    </li>
                )
            }
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">

            <div className="navbar-start">

                <div className="dropdown">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        ☰
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>

                </div>

                <Link
                    to="/"
                    className="text-2xl font-bold text-primary"
                >
                    Qurbani Hat
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>

            </div>

            <div className="navbar-end gap-2">

                {
                    user ? (
                        <>

                            <img
                                src={user.photoURL}
                                alt="user"
                                className="w-10 h-10 rounded-full"
                            />

                            <button
                                onClick={handleLogout}
                                className="btn btn-error btn-sm"
                            >
                                Logout
                            </button>

                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </Link>

                            <Link to="/register">
                                <button className="btn btn-outline">
                                    Register
                                </button>
                            </Link>
                        </>
                    )
                }

            </div>

        </div>
    );
};

export default Navbar;