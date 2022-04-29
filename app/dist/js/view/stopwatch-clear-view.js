export class ClearView {
    static clearButtonOn() {
        const clearAll = document.querySelector('.clear__button');
        if (clearAll)
            clearAll.innerHTML = `<button class="clock__button" id="clearAll">Clear All</button>`;
    }
    static clearButtonOff() {
        const clearAll = document.querySelector('#clearAll');
        if (clearAll)
            clearAll.remove();
    }
    static clearAll() {
        const laps = document.querySelectorAll('.laps');
        laps.forEach(lap => {
            lap.remove();
        });
        const lapList = document.querySelector('.lap__list');
        if (lapList) {
            lapList.classList.add('remove__list');
        }
    }
}
