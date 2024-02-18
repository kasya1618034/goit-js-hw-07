import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const ArrangedGalleryItems = galleryItems.map((item) =>`
    <li><a class='gallery__item' href='${item.original}'><img class='gallery__image' src='${item.preview}'
    alt='${item.description}'></a></li>
`);
gallery.innerHTML = ArrangedGalleryItems.join('');

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionsDelay: 250, 
});

console.log(galleryItems);
