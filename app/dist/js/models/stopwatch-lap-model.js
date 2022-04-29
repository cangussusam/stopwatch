var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { dom } from "../decorators/dom.js";
import { LapView } from "../view/stopwatch-lap-view.js";
export class Lap {
    constructor() {
        this.Laps = [];
        this.verifySame = true;
        this.verifyZero = true;
    }
    callLap() {
        this.add(this.minutes.innerHTML, this.seconds.innerHTML, this.miliseconds.innerHTML);
        const view = new LapView;
        this.sameTimeVerificator();
        this.zeroTimeVerificator();
        if (this.verifySame && this.verifyZero) {
            view.showLap(this.Laps);
        }
    }
    add(minute, second, milisecond) {
        let stringValue = `${minute}:${second}:${milisecond}`;
        this.Laps.push(stringValue);
    }
    sameTimeVerificator() {
        const laplist = document.querySelectorAll('.laps__value');
        laplist.forEach(lap => {
            if (this.Laps[0] == lap.innerHTML) {
                return this.verifySame = false;
            }
            return this.verifySame = true;
        });
    }
    zeroTimeVerificator() {
        if (this.Laps[0] == '00:00:00')
            return this.verifyZero = false;
        return this.verifyZero = true;
    }
}
__decorate([
    dom('#minutes')
], Lap.prototype, "minutes", void 0);
__decorate([
    dom('#seconds')
], Lap.prototype, "seconds", void 0);
__decorate([
    dom('#miliseconds')
], Lap.prototype, "miliseconds", void 0);
