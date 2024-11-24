import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img6 from '../assets/img/img6.jpg';


function GallerySection () {

    const images =[
        {
            original: img1,
            thumbnail:img1
        },
        {
            original: img2,
            thumbnail:img2
        },
        {
            original: img3,
            thumbnail:img3
        },
        {
            original: img4,
            thumbnail:img4
        },
        {
            original: img5,
            thumbnail:img5
        },
        {
            original: img6,
            thumbnail:img6
        }
    
    ]

    return (
        <>
        <div id="gallery" className="gallery-section">
            <ImageGallery items = {images}
            autoPlay = {true}
            showPlayButton = {false}
            showFullscreenButton = {false}
            showThumbnails = {false}
            showBullets = {true}
            slideInterval = {2900}
            slideDuration={600}
            />           
        </div>
        
        </>
    );
}


export default GallerySection;
