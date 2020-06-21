document.addEventListener("DOMContentLoaded", function(event) {
	var lightbox = GLightbox({selector: '.glightbox'});
	var iso = new Isotope( '.grid', {
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});
	if(typeof photo31337 !== 'undefined') {
		for(var i = 0; i < photo31337.length; i++) {
			var p = photo31337[i];
			var j = new Image(); 
			j.onload = function(){
				var a = document.createElement('a');
				document.querySelector('.grid').appendChild(a);
				a.append(this);
				a.className = 'grid-item glightbox';
				a.setAttribute('href', this.src);
				iso.appended(a);
				lightbox.reload();
			}
			j.src = 'image.jpg';
			j.setAttribute('src', p.src);
			j.setAttribute('alt', p.name);
			j.setAttribute('title', p.name);
		}
		iso.layout();
	}
});