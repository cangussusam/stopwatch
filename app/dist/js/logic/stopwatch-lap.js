const miliseconds = document.querySelector('#miliseconds');
const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
export function lapTimer() {
    if (miliseconds && seconds && minutes) {
        let milisecondsValue = parseInt(miliseconds.innerHTML);
        let secondsValue = parseInt(seconds.innerHTML);
        let minutesValue = parseInt(minutes.innerHTML);
        console.log(miliseconds.innerHTML, seconds.innerHTML, minutes.innerHTML);
        console.log(milisecondsValue, secondsValue, minutesValue);
    }
}
