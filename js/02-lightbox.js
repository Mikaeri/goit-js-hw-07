import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".js-container");
// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   }

const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(""));

let lightBox = new SimpleLightbox('.gallery a',{    
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});


