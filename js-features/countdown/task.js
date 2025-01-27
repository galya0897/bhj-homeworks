const allTimer = function () {
    const contentTimer = document.getElementById("timer");
    contentTimer.textContent--;
    if (contentTimer.textContent == 0) {
        alert("Вы победили в конкурсe");
        clearInterval(id)
    }
}
let id = setInterval(allTimer, 50)