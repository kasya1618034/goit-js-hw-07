import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery-link');
    galleryLink.href = item.src;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery-image');
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.dataset.source = item.src;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);
});

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('gallery-image')) {
        const imageUrl = e.target.dataset.source;
        const imageAlt = e.target.alt;
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = imageAlt;
        const instance = basicLightbox.create(imgElement);

        instance.show();
    }
});
