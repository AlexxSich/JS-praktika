import { deleteUser, getUsers } from './usersAPI';
import { createUser } from './usersAPI';
import { rewriteUser } from './usersAPI';
import { updateUser } from './usersAPI';

const refs = {
  userListElem: document.querySelector('.users-cards'),
  createUserForm: document.querySelector('.create-user'),
  updateUserForm: document.querySelector('.update-user'),
  resetUserForm: document.querySelector('.rewrite-user'),
  deleteUserForm: document.querySelector('.delete-user'),
};

refs.createUserForm.addEventListener('submit', onCreateUser);
refs.resetUserForm.addEventListener('submit', onResetUser);
refs.updateUserForm.addEventListener('submit', onUpdateUser);
refs.deleteUserForm.addEventListener('submit', onDeleteUser);

// ================================================================

// ================================================================
// для того щоб відрендерити щось потрібно три функції якщо масив
// 1. функція яка створює розмітку для одного елемента
// 2. функція яка створить розмітку для масива
// 3. функція яка вставить це в розмітку
// ===============================================================

// 1. функція яка створює розмітку для одного елемента, приймає обєкт

function userTemplate(user) {
  return `<li class="user-card" data-id="${user.id}">
        <img             
            src='https://source.unsplash.com/720x1280/?random=${user.id}&girl,portret, celebrity' alt="#"
            class="user-avatar" >
        <h3 class="user-title">${user.name}</h3>
         <p class="contact-item">Phone: ${user.phone}</p>
         <p class="contact-item">Email: ${user.email}</p>
         <button class="btn-delete" type="button">Delete</button>
        </li>`;
}

// =======================================================================
// 2. функція яка створить розмітку для масива, вона приймає масив обэктів.
//  за допомогою map() ми перетворюємо кожен обєкт в цьому масиві arr на розмітку,
//  використовуючи нашу функцію userTemplate() яка створює розмітку для одного елемента

function usersTemplate(arr) {
  return arr.map(userTemplate).join('');
}

// ========================================================================

// 3. Після того як зробили запит на сервер за допомогою функціїї getUsers() from usersAPI.js
// приймаємо then(users) масив данних users  створюємо для нього розмітку markup
// за допомогою функції usersTemplate(arr) і вставляємо розмітку на сторінку в контейнер 'users-cards-container'
//
//

getUsers().then(users => {
  const markup = usersTemplate(users);
  refs.userListElem.innerHTML = markup;
});

// ==================Create User========================================
// Збираємо данні з inputs форми create user card
function onCreateUser(event) {
  event.preventDefault();

  // збираємо данні з форми
  const userObj = {
    name: refs.createUserForm.elements.userName.value.trim(),
    phone: refs.createUserForm.elements.userPhone.value.trim(),
    email: refs.createUserForm.elements.userEmail.value.trim(),
    img: 'https://source.unsplash.com/720x1280/?random=${Math.random()}&girl,portret, celebrity',
  };

  // тут викликаємо функцію яка передає данні на сервер методом POST і передаємо їй наш обєкт з данними які ми зібрали з форми
  // після отримуємо відповідь вже с сервера з ціми данними які вже записалися в базу данних, за допомогою then()
  // і вставляємо їх на нашу сторінку - створюючи розмітку за допомогою функціїї userTemplate яку ми
  // створили для одного елемента

  createUser(userObj).then(newUser => {
    const markup = userTemplate(newUser);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  });
  event.target.reset();
}

// ================= RESET-REWRITE USER==========================
// при оновленні данних юзера треба знову зібрати данні які він ввів у форму
// це можна зробити як і при створенні юзера через input.value але тут зробимо через FormData
// це клас який створений, щоб працювати з формами і йому треба вказати з якою формою він
// буде працювати, в цьому випадку це форма resetUserForm, у цього обєкта FormData є метод
// forEach який перебирає поля форми і якщо у нас багато полів, то це дуже зручно використовувати
// метод forEach від дуже швидко пройдеться по всім полям input і не треба для кожного поля
// окремо створювати змінні і туди записувати данні з полів input.
//  Таким чином в обєкті  myData створюємо властивість  key зі значенням value і після циклу
// forEach в нашому обєкті  myData будуть данні з усіх полів input форми resetUserForm
// key береться з HTML з полів input властивість name=''

function onResetUser(event) {
  event.preventDefault();

  const formData = new FormData(refs.resetUserForm);
  const myData = {};

  formData.forEach((value, key) => {
    myData[key] = value;
  });

  // для того щоб замінити юзера, карточку юзера треба спочатку знайти
  // робимо це через document.querySelector по data-id після того як вона знайдена вставляємо
  //  після неї нову карточку за доромогою .insertAdjacentHTML('afterend', markup)
  // а стару карточку видаляємо oldUser.remove()

  rewriteUser(myData).then(updatedUser => {
    const markup = userTemplate(updatedUser);
    const oldUser = document.querySelector(`[data-id="${myData.id}"]`);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  });

  event.target.reset();
}

//const obj = {};            це пустий обєкт
//obj.name = 'Alex';         це статичне звернення, додаємо в обєкт властивість name (key) зі значенням Alex (value)
// obj['name'] = 'Alex';     те саме але це динамічне звернення і плюс такого методу
//                           що сюди можна підставити змінну яка створена раніше

// const key = 'name';       змінна key
// obj[key] = 'Alex';        за допомогою змінної key ми записали в обєкт властивість name (key) зі значенням Alex (value)

// const obj = {};
// const key = 'name';       тепер за допомогою двох змінних ми записали в обєкт
// const value = 'Alex';     властивість name (key) зі значенням Alex (value)
// obj[key] = value;         тобто ми отримали obj = {name: 'Alex'} це дозволяє динамічно записувати дані в обєкт

// ================= UPDATE USER ==========================
function onUpdateUser(event) {
  event.preventDefault();

  const myData = {};
  const formData = new FormData(refs.updateUserForm);

  formData.forEach((value, key) => {
    if (value) {
      myData[key] = value;
    }
  });

  updateUser(myData).then(updatedUser => {
    const markup = userTemplate(updatedUser);
    const oldUser = document.querySelector(`[data-id="${myData.id}"]`);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  });

  event.target.reset();
}

// ================= DELETE USER ==========================
function onDeleteUser(event) {
  event.preventDefault();

  const id = refs.deleteUserForm.elements.userId.value;

  deleteUser(id)
    .then(() => {
      const oldUser = document.querySelector(`[data-id="${id}"]`);
      oldUser.remove();
    })
    .catch(err => {
      console.log(err);
    });

  event.target.reset();
}
