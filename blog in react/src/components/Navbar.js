import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="border-b-4 border-blue-600 text-right fixed top-0 bg-blue-400 font-extrabold w-full text-lg text-white">
        <ul className="pr-10">
            <li className="inline-block py-4">
                <Link to="/" className="pl-6 pr-8">
                    Home
                </Link>
            </li>
            <li className="inline-block py-4">
                <Link to="/about" className="pl-6 pr-8">
                    About
                </Link>
            </li>
            <li className="inline-block py-4">
                <Link to="/articlelist" className="pl-6 pr-12">
                    Article-List
                </Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
