const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

// const onAddGallery = images.map(img => {
//   const liEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   imgEl.scr = img.url;
//   imgEl.alt = img.alt;
//   liEl.append(imgEl);
//   return liEl;
// }); 
// gallery.append(...onAddGallery);

const onAddGallery = images.map(({ url, alt }) => {
  return `<li><img alt='${alt}'; src='${url}';></li>`;
}).join(" ");
gallery.insertAdjacentHTML("beforeend", `${onAddGallery}`);

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные 
// строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];