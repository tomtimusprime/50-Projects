//Dom Manipulation Notes
//There are 5 ways to select items in the DOM

//1. getElementById();
//2. getElementByClassName();
//3. getElementsByTagName(); Returns an HTMLElement List
//4. querySelector();
//5. querySelectorAll(); Returns a nodelist

// const body = document.querySelector('body');
// console.log(body);
let inputValue = document.querySelector("#inputText").value;
console.log(inputValue);
// const button = document.querySelector('button');
// console.log(button);
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     body.style.backgroundColor = inputValue;
//     console.log(inputValue);
//     inputValue = '';
// })

// function changeColor(e){
//     body.style.backgroundColor = e.value;
// }

function changeColor(){
    let color = document.querySelector('#inputText').value;
    const container = document.querySelector(".container");
    console.log(color);
    container.style.backgroundColor = color;
    document.querySelector("#inputText").value = " ";
}

const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click', changeColor);

//Worked on the react version of this.