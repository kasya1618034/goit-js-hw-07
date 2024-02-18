import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.dataset.source = item.original;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);
});

document.querySelector('.gallery').addEventListener('click', e => {
    const link = e.target.closest('.gallery__link');
    if (!link) return;

    e.preventDefault();

    const sourceUrl = link.getAttribute('href');
    const img = link.querySelector('.gallery__image');
    const dataSource = img.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${sourceUrl}" alt="${img.alt}" data-source="${dataSource}" />
    `);

    instance.show();

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', handleKeyDown);
        }
    };

    document.addEventListener('keydown', handleKeyDown);
});