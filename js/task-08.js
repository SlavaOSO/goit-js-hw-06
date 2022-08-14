const form = document.querySelector('.login-form');

const chekingForm = (e) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    if (mail === "" || password === "") {
        return alert("все поля должны быть заполнены");
    } else {
        const formData = {
        mail,
        password,
        };
        console.log(formData);
    };
    return form.reset()
    // const formData = new FormData(e.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log('name', name);
    //     console.log('value', value);
    // })
};
    
form.addEventListener('submit', chekingForm);

// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства,
//  а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.