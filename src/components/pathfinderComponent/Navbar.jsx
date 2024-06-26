import React from 'react';
import SimpleSelect from "./SimpleSelect";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">Pathfinder</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link to={"/"} style={{ color: "white" }}>
                    <span>
                        Home
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
