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

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" alt="${e.target.alt}" />`);

  instance.show();
});
    