const body = document.querySelector('body');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const rgba = document.querySelector('#rgba');


function setColor() {
    // rgb (0, 255, 25)
    // rgba(0, 255, 64, 0 - 1)
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const rgbaVal = rgba.value / 100;
    const rgbaColor = `rgba(${ redVal }, ${ greenVal}, ${ blueVal }, ${ rgbaVal})`;
    body.style.background= rgbaColor;

}

setColor();

red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
rgba.addEventListener('input', setColor);