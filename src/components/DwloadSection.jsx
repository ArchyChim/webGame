import React from "react";



function DwloadSection () {
    return (
        <>
        <div id="download" className="dw-section">
            <h1>¡Descarga Ahora!</h1> <br />
            <p>Y comienza a disfrutar de la mejor experiencia de terror psicológico</p>

            <ul>

                <li>
                    <a href = "/test-image.jpg" download className="download windows">
                        <i className='bx bxl-windows'></i>
                        <div className="text-icon-container">
                            <span className="df">Download for</span>
                            <span className="dfn"> Windows</span>
                        </div>
                    </a>
                </li>

                <li>
                    <a href = "/test-image.jpg" download className="download apple">
                        <i className='bx bxl-apple'></i>
                        <div className="text-icon-container">
                            <span className="df">Download for</span>
                            <span className="dfn">Mac</span>
                        </div>                 
                    </a>
                </li>
               
            </ul>
        </div>
        
        
        
        </>
    )
}



export default DwloadSection;




