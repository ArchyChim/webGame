import React from "react";
import './Navbar.css';

function Navbar(){
    return (
        <nav className="navbar">
            <a href="#home">Inicio</a>
            <a href="#history">Historia</a>
            <a href="#gallery">Galerias</a>
            <a href="#contact">Contacto</a>
        </nav>

    );
}

export default Navbar;
