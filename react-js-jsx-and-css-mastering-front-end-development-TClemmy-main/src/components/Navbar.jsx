import React from "react";
import { Link } from "react-router-dom";
// the css

const Navbar = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <nav className="navbar">
                <h2 className="logo text-2x1 font-semibold text-gray-800 mb-2">The Logo for the project</h2>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Page</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;