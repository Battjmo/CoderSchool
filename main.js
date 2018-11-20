const playButton = document.getElementById("play");
const redBox = document.getElementById("box");
const stop = document.getElementById("stop");

stop.onclick = function () {
    redBox.style.animationPlayState = 'paused';
};

playButton.onclick = function() {
    redBox.style.animationName = 'colorBox';
    if (redBox.style.animationPlayState === 'paused') {
        redBox.style.animationPlayState = 'running';
    }
};

