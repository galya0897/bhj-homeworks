let counterOfClicks = document.getElementById('clicker__counter');
let cookieImage = document.getElementById('cookie');

cookieImage.onclick = function () {
    if (+counterOfClicks.textContent % 2 === 1) {
        +counterOfClicks.textContent++;
        cookieImage.width -= 50;
    }
    else if (+counterOfClicks.textContent % 2 === 0) {
        +counterOfClicks.textContent++;
        cookieImage.width += 50;
    }
};