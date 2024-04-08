// const delay = Math.random() * 2000;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.random();
//     if (random > 0.5) {
//       resolve(delay);
//     } else {
//       reject(delay);
//     }
//   }, delay);
// });

// promise
//   .then(message => {
//     console.log(message, 'Ok');
//   })
//   .catch(message => {
//     console.log(message, 'Error');
//   })
//   .finally(console.log('Final'));

// =========================================
// function onFulfiled(message) {
//   console.log(message, 'Ok');
// }

// function onRejected(message) {
//   console.log(message, 'Error');
// }

// ===============================

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve('Hello');
//   } else {
//     reject('Sorry');
//   }
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('The End');
//   });

// =============================
// Промісіфікація - це функція яка повертає проміс
// '✅', '❌'
//

// function foo() {
//   const promise = new Promise(resolve => {
//     resolve(10);
//   });
//   return promise;
// }

// function createPromise(delay, state, value) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === 'green') {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise(5000, 'green', 'p1');
// const p2 = createPromise(2000, 'red', 'p2');
// const p3 = createPromise(4000, 'green', 'p3');

// p1.then(onFulfilled).catch(onRejected);
// p2.then(onFulfilled).catch(onRejected);
// p3.then(onFulfilled).catch(onRejected);

// function onFulfilled(data) {
//   console.log(`✅ - ${data}`);
// }

// function onRejected(data) {
//   console.log(`❌ - ${data}`);
// }

// методи обєкта Promise
// Promise.resolve()
// Promise.reject()

// function foo() {
//   const arr = [];
//   return Promise.resolve(arr);
// }
// ===================================================
function createPromise(delay, isActive, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
  return promise;
}

const p1 = createPromise(1000, true, 'p1');
const p2 = createPromise(4000, true, 'p2');
const p3 = createPromise(3000, false, 'p3');
const p4 = createPromise(5000, true, 'p4');

const promisesArr = [p1, p2, p3, p4];

// Promise.all повертає масив промісів, якщо всі повернулися без помилок то виводить. якщо є помилка, то повертає тільки значення помилки
Promise.all(promisesArr)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

// Promise.allSettled повертає масив промісів, і з помилками і без.
Promise.allSettled(promisesArr).then(result => {
  console.log(result);
});

// Promise.race повертає значення першого виконаного промісу
Promise.race(promisesArr)
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  });
