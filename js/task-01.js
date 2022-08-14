const allItem = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${allItem.length}`);

allItem.forEach(item => {
    const titles = item.querySelector("h2").textContent;
    const innerLI = item.querySelectorAll("ul>li").length;
    console.log(`Category: ${titles}\nElements: ${innerLI}`);
});

// const titles = document.querySelectorAll("h2");
// tittles.forEach(value => console.log(value.textContent));
// console.log(titles);
// const includLi = document.querySelectorAll('li>ul');
// console.log(includLi);

// const categoriesElts = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesElts.length}`);
// categoriesElts.forEach(element => {
//     console.log(`Category: ${element.querySelector("h2").textContent} Elements: ${element.querySelectorAll(`li`).length}`);
// })

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
//  и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const mainListEl = document.querySelector('#categories');