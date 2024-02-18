import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const ArrangedGalleryItems = galleryItems.map((item) =>`
    <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
    </a>
  </div>
`);
    
gallery.innerHTML = ArrangedGalleryItems.join('');

gallery.addEventListener('click', event => {
  event.preventDefault();
  
  if (event.target.classList.contains('gallery__image')) {
    const sourceUrl = event.target.dataset.source;
    const img = event.target;

    const instance = basicLightbox.create(`
      <img src="${sourceUrl}" alt="${img.alt}" />
    `);

    instance.show();

    const escapeKeyDown = event => {
      if (event.code === 'Escape') {
        instance.close();
      }
    };

    document.addEventListener('keydown', escapeKeyDown);

    instance.element().addEventListener('click', event => {
      if (event.target.nodeName === 'IMG') {
        instance.close();
      }
    });

    instance.on('close', () => {
      document.removeEventListener('keydown', escapeKeyDown);
    });
  }
});

console.log(galleryItems);