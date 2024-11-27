import React from "react";
import './dwload.css';


function DwloadSection () {
    return (
        <>
        <div id="download" className="dw-section">
            <div className="dw-section-text">
                <h1>¡Descarga Ahora!</h1> <br />
                <p>Y comienza a disfrutar de la mejor experiencia de terror psicológico</p>
            </div>
            

            <ul>

                <li>
                    <a href = "https://drive.google.com/file/d/1nC0jE46M0Hghjp-eHAOd_CoYW6Nv83-J/view?usp=sharing" download className="download windows">
                        <i className='bx bxl-windows'></i>
                        <div className="text-icon-container">
                            <span className="df">Descargar para</span>
                            <span className="dfn"> Windows</span>
                        </div>
                    </a>
                </li>

                <li>
                    <a href = "https://drive.google.com/file/d/1nC0jE46M0Hghjp-eHAOd_CoYW6Nv83-J/view?usp=sharing" download className="download apple">
                        <i className='bx bxl-apple'></i>
                        <div className="text-icon-container">
                            <span className="df">Descargar para</span>
                            <span className="dfn">Mac</span>
                        </div>                 
                    </a>
                </li>
               
               
            </ul>
            <br />
            <a href="/manualEFB.pdf" download className="dw-manual">
                Descarga el manual del juego aquí
            </a>

        </div>
        
        
        
        </>
    )
}



export default DwloadSection;




