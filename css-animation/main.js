const playButton = document.getElementById("play");
const redBox = document.getElementById("box");
const stop = document.getElementById("stop");
const reverse = document.getElementById("reverse");

playButton.onclick = function() {
    if (redBox.style.animationPlayState === 'paused' || redBox.style.animationPlayState === "") {
        console.log("paused");
        redBox.style.animationPlayState = 'running';
        playButton.innerHTML = ' Pause ';
    }
    else if (redBox.style.animationPlayState === 'running') {
        redBox.style.animationPlayState = 'paused';
        playButton.innerHTML = ' Play ';
    } 
};

reverse.onclick = function() {
    redBox.style.animationDirection = 'alternate-reverse';
};

