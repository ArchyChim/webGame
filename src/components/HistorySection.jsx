import React from "react";
import { useEffect } from "react";
import image1 from '../assets/img/image.jpg';
import './history.css';


function HistorySection () {
    useEffect (() => {
        const observer = new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {threshold: 0.5 }
        );

        const elements = document.querySelectorAll('.animate-text');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (

        <div id='history' className="history-section">

            <img src={image1} alt="" className="image1" />
            <div className="history-text animate-text">      
                <em><p>Ethan Blackwood, es un detective que lleva años atormentado por la desaparición de su hermana menor, 
                Alice, quien desapareció sin dejar rastro hace cinco años. La investigación no arrojó ningún resultado 
                y la familia Blackwood se vio sumida en un profundo dolor. Ethan, incapaz de dejar atrás el misterio, se obsesionó con encontrar la verdad, 
                investigando por su cuenta cada pista, cada rumor, cada sombra que pudiera conducirlo al paradero de Alice.</p> </em>
            </div>

        </div>

    );
}

export default HistorySection;
