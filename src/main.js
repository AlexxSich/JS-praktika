
// const startBtn = document.querySelector('[data-action-start]')
// const stoptBtn = document.querySelector('[data-action-stop]')
// const clockFase = document.querySelector(".clockface")

// startBtn.addEventListener("click", pushStartBtn);
// stoptBtn.addEventListener("click", pushStopBtn);

// let startCount;

// let userTime = 0;
// let initTime = 0;
// function pushStartBtn() {
//     initTime = Date.now();

//     startCount = setInterval(() => {
//         const currentTime = Date.now();
//         const diffTime = currentTime - initTime + userTime;

//         const time = formatTime(diffTime);
//         clockFase.textContent = time;
//         if(diffTime < 1000) clearInterval(startCount);

//     }, 1000)
// }

// function pushStopBtn() {
//     clearInterval(startCount);
//     userTime += Date.now() - initTime;
// }

// const formatTime = milliseconds => {
//     const seconds = Math.floor((milliseconds / 1000) % 60);
//     const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
//     const hours = Math.floor((milliseconds / 1000/ 60 / 60) % 24);

//     return [
//         hours.toString().padStart(2, '0'),
//         minutes.toString().padStart(2, '0'),
//         seconds.toString().padStart(2, '0'),
//     ].join(':');
// };