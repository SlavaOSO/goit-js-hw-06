let counterValue = 0;

const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');

const ePlus = () => {
    counterValue += 1;
    return document.querySelector('#value').textContent = counterValue;
};

const eMinus = () => {
    counterValue -= 1;
    return document.querySelector('#value').textContent = counterValue;
}

const onClickPlus = btnPlus.addEventListener('click', ePlus);
const onClickMinus = btnMinus.addEventListener('click', eMinus);

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.