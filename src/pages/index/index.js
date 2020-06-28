import './index.css';

// importing css of GLightBox
import "../../vendor/glightbox/glightbox.css";

// importing GLightBox
import "../../vendor/glightbox/glightbox.js";

// importing jQuery
import $ from "../../../node_modules/jquery/dist/jquery.min.js";

// importing Isotope
import Isotope from "../../../node_modules/isotope-layout/dist/isotope.pkgd.min.js";

// importing photos
import {photos} from "./photo.js";

$(() => {
    const lightbox = GLightbox({selector: ".glightbox"});

    const iso = new Isotope( ".grid", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
            columnWidth: ".grid-sizer"
        }
    });
    if(typeof photos !== 'undefined') {
        for(const photo of photos) {
            const imageElement = new Image();
            imageElement.onload = function(){
                const a = document.createElement('a');
                document.querySelector('.grid').appendChild(a);
                a.append(this);
                a.className = 'grid-item glightbox';
                a.dataset.type = "image";
                a.setAttribute('href', this.src);
                iso.appended(a);
                lightbox.reload();
            }
            imageElement.setAttribute('src', photo.src);
            imageElement.setAttribute('alt', photo.name);
            imageElement.setAttribute('title', photo.name);
        }
        iso.layout();
    }
});