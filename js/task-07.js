const inputSize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onChangeSize = (e) => {
    textEl.style.fontSize = `${e.currentTarget.value}px`;
};

inputSize.addEventListener('input', onChangeSize);

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>