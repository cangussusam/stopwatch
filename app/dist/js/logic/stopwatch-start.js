const appendMiliseconds = document.querySelector('#miliseconds');
const appendSeconds = document.querySelector('#seconds');
const appendMinutes = document.querySelector('#minutes');
let tens = 0, seconds = 0, minutes = 0;
export function startTimer() {
    tens++;
    if (appendMiliseconds && appendSeconds && appendMinutes) {
        if (tens <= 9) {
            appendMiliseconds.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendMiliseconds.innerHTML = "" + tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
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
