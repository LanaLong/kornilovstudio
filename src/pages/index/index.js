import './index.css';
import '../../../node_modules/isotope-layout/dist/isotope.pkgd.min.js';
import '../../js/utils/isotopHelper';

// FROM https://isotope.metafizzy.co/#install
const elem = document.querySelector('.grid');
const iso = new Isotope( elem, {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});

// element argument can be a selector string
//   for an individual element
const iso = new Isotope( '.grid', {
    // options
});
