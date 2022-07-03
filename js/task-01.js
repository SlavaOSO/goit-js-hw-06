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