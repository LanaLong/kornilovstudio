class GalleryCardList {
    constructor(createCommitCard) {
        this.createGalleryCard = createGalleryCard;
        this.galleryWrapper = document.querySelector('.CLASS_WRAPPER');
    }

    createGalleryCardList(galleryCard) {

        galleryCard.forEach(item => {

            const galleryCard = this.createGalleryCard(galleryArgs);

            this.galleryWrapper.insertAdjacentHTML('beforeend', galleryCard.createMarkup());
        });
    }
}

export { GalleryCardList };