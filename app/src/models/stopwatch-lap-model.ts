import { dom } from "../decorators/dom.js"
import { LapView } from "../view/stopwatch-lap-view.js"

export class Lap {
    
    @dom('#minutes')
    private minutes: HTMLElement
    @dom('#seconds')
    private seconds: HTMLElement
    @dom('#miliseconds')
    private miliseconds: HTMLElement

    private Laps: Array<string> = []
    private verifySame = true
    private verifyZero =  true

    public callLap(){
        this.add(this.minutes.innerHTML, this.seconds.innerHTML, this.miliseconds.innerHTML)
        const view = new LapView
    
        this.sameTimeVerificator()
        this.zeroTimeVerificator()

        if(this.verifySame && this.verifyZero){
            view.showLap(this.Laps)
        }
    }

    private add(minute: string, second: string, milisecond: string): void {
        let stringValue = `${minute}:${second}:${milisecond}`
        this.Laps.push(stringValue)
    }

    private sameTimeVerificator() {

        const laplist = document.querySelectorAll('.laps__value')
      
        laplist.forEach(lap => {
            if(this.Laps[0] == lap.innerHTML){
                return this.verifySame = false
            }
            return this.verifySame = true
        })
    }
    
    private zeroTimeVerificator() {
        if(this.Laps[0] == '00:00:00')
            return this.verifyZero = false

        return this.verifyZero = true    
    }
}