

export class RestartView {

    static restartButtonOn() {
        const restart = document.querySelector('.button__restart')
        if(restart) restart.innerHTML = `<button class="clock__button" id="restart">Restart</button>`
    }

    static restartButtonOff() {
        const restart = document.querySelector('#restart')
        if(restart) restart.remove()
    }
}