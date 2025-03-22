const items = document.querySelectorAll('.count-down-item > h4');
const countdownElement = document.querySelector('.count-down');

// Начинаем дату отсчета
let countdownDate = new Date(2025, 4, 26, 10, 15, 0).getTime();

const getCountdownTime = () => {
    // Получем текущее время
    const now = new Date().getTime();

    //Находим разницу времени
    const distance = countdownDate - now;

    // 1c = 100мс
    // 1м = 60с
    // 1ч = 60м
    // 1д = 24ч
    const oneDay = 24 *60 *60 *1000;
    const oneHour = 60 *60 *1000;
    const oneMinute = 60*1000;

    // Подсчитываем дни, часы, минуты, секунды
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    // Массив с переменными
    const values = [days, hours, minutes, seconds];

    // Выводим значения переменных
    items.forEach((item, index) => {
        item.textContent = values[index];
    });

    if(distance < 0) {
        clearInterval(countDown);
        countdownElement.innerHTML = "<h4 class='expired'>Время вышло</h4>"
    }
    
}

let countDown = setInterval(getCountdownTime, 1000);
getCountdownTime();