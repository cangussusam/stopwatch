import { resetTimer, startTimer } from "../logic/stopwatch-buttons.js";
import { Lap } from "../models/stopwatch-lap-model.js";
import { ClearView } from "../view/stopwatch-clear-view.js";
import { RestartView } from "../view/stopwatch-restart-view.js"

export class StopwatchController {

    private interval: any
    private verificator: boolean = false
    private allZero: boolean = false

    public start() {
        const start = document.querySelector('#start') as HTMLElement
        start.innerHTML = 'Start'
        RestartView.restartButtonOn()

        this.verificator = true

        clearInterval(this.interval)
        this.interval = setInterval(startTimer, 10)
    }

    public stop() {
        clearInterval(this.interval)

        if (this.verificator) {
            const start = document.querySelector('#start') as HTMLElement
            start.innerHTML = 'Resume'
        }
    }

    public restart() {
        clearInterval(this.interval)
        resetTimer()

        const start = document.querySelector('#start') as HTMLElement
        start.innerHTML = 'Start'
        RestartView.restartButtonOff()
    }

    public lap() {
        const laps = new Lap
        laps.callLap()

        this.zeroVerification()
        if(!this.allZero){
            ClearView.clearButtonOn()
        }
    }

    public clearAll() {
        ClearView.clearAll()
        ClearView.clearButtonOff()
    }

    private zeroVerification() {

        const ms = document.querySelector('#miliseconds')
        const seconds = document.querySelector('#seconds')
        const minutes = document.querySelector('#minutes')

        if (ms && seconds && minutes) {
            
            if(ms.innerHTML == '00' && seconds.innerHTML == '00' && minutes.innerHTML == '00'){
                return this.allZero = true
            }

            return this.allZero = false
        }
    }
}