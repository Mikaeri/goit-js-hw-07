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
<a class="gallery__link js-target" href="${original}">
<img class="gallery__image js-target" src="${preview}" data-source="${original}" alt="${description}">
</a>
</li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(""));

gallery.addEventListener('click', onClick);

function onClick(evt){
    if (!evt.target.classList.contains("js-target")){
        return;
    }
    console.log(evt.target);
    evt.preventDefault();

const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${evt.target.dataset.source}" alt="${evt.target.alt}" width="900">
    </div>
`)

instance.show();

document.addEventListener("keydown", onKeyDown);

function onKeyDown({key}){
if(key === "Escape"){
    instance.close();
}
}
}


