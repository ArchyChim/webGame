import React, {useState} from "react";
import './navbar.css';

function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <a href="#home">Inicio</a>
                <a href="#history">Historia</a>
                <a href="#gallery">Galeria</a>
                <a href="#download">Descargar</a>
                <a href="#contact">Contacto</a> 
            </div>
                        
        </nav>

    );
}

export default Navbar;
