import React from "react";
import './navbar.css';

function Navbar(){
    return (
        <nav className="navbar">
            <a href="#home">Inicio</a>
            <a href="#history">Historia</a>
            <a href="#gallery">Galeria</a>
            <a href="#download">Descargar</a>
            <a href="#contact">Contacto</a>             
        </nav>

    );
}

export default Navbar;
