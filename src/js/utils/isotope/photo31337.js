document.addEventListener("DOMContentLoaded", function(event) {
	var iso = new Isotope( '.grid', {
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});
	if(typeof photos !== 'undefined') {
		for(var i = 0; i < photos.length; i++) {
			var p = photos[i];
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