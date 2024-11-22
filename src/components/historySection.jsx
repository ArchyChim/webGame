import React from "react";
import { useEffect } from "react";



function historySection () {
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
    })
}



