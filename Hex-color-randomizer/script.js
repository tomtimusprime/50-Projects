const colorSpan = document.querySelector('#colorId');
const container = document.querySelector('#container');

function setBackgroundColor(){
    let currentColor = changeColor();
    container.style.backgroundColor = currentColor;
    console.log(currentColor);
    colorSpan.innerHTML = `Color: ${currentColor}`;
}

function changeColor() {
    let hexValue = '#';
    const hexArray = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random() * hexArray.length);
        hexValue+=hexArray[randomNum];
    }

    return hexValue;
}

