import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('');

gallery.insertAdjacentHTML('afterbegin', markup);

gallery.addEventListener("click", evt => {
    evt.preventDefault();
    if(evt.target.nodeName !== "IMG"){
        return;
    }
    const instance = basicLightbox.create(`<img class="gallery__image"
      src="${evt.target.dataset.source}"
      data-source="${evt.target.dataset.source}"
      alt="${evt.target.getAttribute('alt')}"
    />`);
    instance.show();
    window.addEventListener("keydown", evt => {
        if (evt.code === "Escape" && basicLightbox.visible() === true) {
            instance.close();
         };
    });
});



