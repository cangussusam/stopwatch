export class LapView {
    showLap(lap) {
        const laplist = document.querySelectorAll('.laps__value');
        const temp = laplist.length + 1;
        let laps = document.querySelector('.lap__list');
        if (laplist.length > 24) {
            return;
        }
        if (temp % 5 == 0) {
            console.log(temp);
        }
        if (laps) {
            laps.innerHTML += `
            <div class="laps">
                <p class="laps__title"> Lap ${temp}: <span class="laps__value">${lap}</span></p>
            </div>`;
            laps.classList.remove('remove__list');
        }
    }
}
