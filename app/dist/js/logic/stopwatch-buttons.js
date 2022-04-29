const appendMiliseconds = document.querySelector('#miliseconds');
const appendSeconds = document.querySelector('#seconds');
const appendMinutes = document.querySelector('#minutes');
let ms = 0, seconds = 0, minutes = 0, verificator;
export function startTimer() {
    ms++;
    if (appendMiliseconds && appendSeconds && appendMinutes) {
        if (ms <= 9) {
            appendMiliseconds.innerHTML = "0" + ms;
        }
        if (ms > 9) {
            appendMiliseconds.innerHTML = "" + ms;
        }
        if (ms > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            ms = 0;
            appendMiliseconds.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = "" + seconds;
        }
        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            appendSeconds.innerHTML = "0";
            seconds = 0;
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = "" + minutes;
        }
    }
}
export function resetTimer() {
    ms = 0;
    seconds = 0;
    minutes = 0;
    if (appendMiliseconds && appendSeconds && appendMinutes) {
        appendMiliseconds.innerHTML = '0' + ms;
        appendSeconds.innerHTML = '0' + seconds;
        appendMinutes.innerHTML = '0' + minutes;
    }
}
