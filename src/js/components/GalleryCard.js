class GalleryCard {
    constructor(GalleryData) {

    }

    createMarckUp() {
        return `
            <div class="galleryCard">
                <img src="${this.GalleryImgSrc}" alt="${this.GalleryImgName}" class="galleryCard__img">
            </div>
        `
    }
}

export { GalleryCard };

// <div class="grid">
//     <div class="grid-item">...</div>
// <div class="grid-item grid-item--width2">...</div>
// <div class="grid-item">...</div>
// ...
// </div>