import './about.css';
import './photo.js';
import GLightbox from 'glightbox';

console.log('Проверка console.log in ABOUT');

import '../../js/utils/isotope/layout-mode.js';
import '../../js/utils/isotope/isotope.pkgd.min.js';
import '../../js/utils/isotope/fit-columns';
// import '../../js/utils/isotope/photo31337';


// const lightbox = GLightbox({ ...options });

// const lightbox = GLightbox({
//     touchNavigation: true,
//     loop: true,
//     autoplayVideos: true,
//     onOpen: () => {
//         console.log('Lightbox opened')
//     },
//     beforeSlideLoad: (slideData) => {
//         // Need to execute a script in the slide?
//         // You can do that here...
//     }
// });
// FROM https://isotope.metafizzy.co/#install
// const elem = document.querySelector('.grid');
// const iso = new Isotope( elem, {
//     // options
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows'
// });


// document.addEventListener("DOMContentLoaded", function(event) {
//
//     var iso = new Isotope( '.grid', {
//         itemSelector: '.grid-item',
//         percentPosition: true,
//         masonry: {
//             columnWidth: '.grid-sizer'
//         }
//     });
//     if(typeof photo !== 'undefined') {
//         for(var i = 0; i < photo.length; i++) {
//             var p = photo[i];
//             var j = new Image();
//             j.onload = function(){
//                 var a = document.createElement('a');
//                 document.querySelector('.grid').appendChild(a);
//
//                 console.log(photo[i])
//                 a.append(this);
//                 a.className = 'grid-item';
//                 a.setAttribute('href', this.src);
//                 iso.appended(a);
//
//             }
//             j.src = 'image.jpg';
//             j.setAttribute('src', p.src);
//             j.setAttribute('alt', p.name);
//             j.setAttribute('title', p.name);
//         }
//         iso.layout();
//     }
// });

var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
    itemSelector: '.grid-item',
    percentPosition: true,
        masonry: {
    columnWidth: '.grid-sizer'
        }
});
