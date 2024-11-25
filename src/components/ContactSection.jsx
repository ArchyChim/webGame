import React from "react";
import Swal from "sweetalert2";


function ContactSection () {


    const handleSubmit = (event)  => {
        event.preventDefault();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Enviado!",
            showConfirmButton: false,
            timer: "1500"
        });

        event.target.reset();
    }

    return (
        <>

        <div id="contact" className="contact-container">
            <h2>Contáctanos</h2>
            <p>
            ¿Tienes preguntas o comentarios? ¡Nos encantaría escucharte!
            </p>
            
            <div className="contact-info">
                <div className="info-item">
                    <i className="bx bx-map-alt"></i>
                    <p>Iza York, México</p>
                </div>
                <div className="info-item">
                    <i className="bx bx-phone-incoming"></i>
                    <p>+52 988 967 2671</p>
                </div>
                <div className="info-item">
                    <i className="bx bx-envelope"></i>
                    <p>ZamnaGames@hotmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <input className="name" type="text" placeholder="Nombre" required />
                <input className="email" type="email" placeholder="E-mail" required />
                <input className="phone" type="tel" placeholder="Teléfono" />
                <input className="subject" type="text" placeholder="Concepto" required/>
                <textarea className="message" placeholder="Mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>





        
   
  
                
    </>
);

}

export default ContactSection;


