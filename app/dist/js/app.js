import { StopwatchController } from "./controllers/stopwatch-controller.js";
const controller = new StopwatchController;
const start = document.querySelector('#start');
if (start) {
    start.addEventListener('click', function () {
        controller.start();
        const restart = document.querySelector('#restart');
        if (restart) {
            restart.addEventListener('click', function () {
                controller.restart();
            });
        }
    });
}
const stop = document.querySelector('#stop');
if (stop) {
    stop.addEventListener('click', function () {
        controller.stop();
    });
}
const lap = document.querySelector('#lap');
if (lap) {
    lap.addEventListener('click', function () {
        controller.lap();
        const clearAll = document.querySelector('#clearAll');
        if (clearAll) {
            clearAll.addEventListener('click', function () {
                controller.clearAll();
            });
        }
    });
}
