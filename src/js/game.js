// ❌, 😄

const startBtn = document.querySelector('.timer-btn');
const container = document.querySelector('.container');
const pResult = document.querySelector('.result');

startBtn.addEventListener('click', clickSatrtBtn);

function clickSatrtBtn() {
  pResult.textContent = '';
  const promises = [];
  for (let i = 0; i < 3; i += 1) {
    container.children[i].textContent = '';
    const promise = createPromise((i + 1) * 150);
    promise
      .then(smile => {
        container.children[i].textContent = smile;
      })
      .catch(smile => {
        container.children[i].textContent = smile;
      });
    //   .finally(() => {
    //     if (smile === '😄') {
    //       pResult.textContent = 'Congratulation!!! You WON!!!';
    //     } else {
    //       pResult.textContent = 'You LOST';
    //     }
    //   });
    promises.push(promise);
  }
  Promise.allSettled(promises).then(result => {
    const isWon = result
      .map(el => {
        return el.value || el.reason;
      })
      .every(el => el === '😄');
    pResult.textContent = isWon ? 'You are WINNER!!!' : 'You LOST';
  });
}

function createPromise(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.3) {
        resolve('😄');
      } else {
        reject('❌');
      }
    }, delay);
  });
  return promise;
}
