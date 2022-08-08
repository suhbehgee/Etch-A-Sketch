const sketchPad = document.querySelector('.sketchPad');
const clear = document.querySelector('.clear');
const removeGrid = document.querySelector('.removeGrid');
const newGrid = document.querySelector('.newGrid');
const oneSide = document.querySelector('#oneSide');
const eraser = document.querySelector('.eraser');
let gridSize = oneSide.value;
// let gridSize = 10;
// let boxHeight = 500/gridSize + 'px';
// let boxWidth = 500/gridSize + 'px';
// let numberBoxes = gridSize*gridSize;
let mouseDown = false;
let activeColor = 'black';

console.log(gridSize);
console.log(oneSide);
// console.log(boxHeight);
// console.log(numberBoxes);
// console.log(sketchPad);
// console.log(clear);

clear.addEventListener('click', clearBoxes);
eraser.addEventListener('click', eraseMode);
removeGrid.addEventListener('click', () => removeBoxes(sketchPad));
newGrid.addEventListener('click', () => makeGrid(gridSize*gridSize));
oneSide.addEventListener('input', () => gridSize = oneSide.value);
oneSide.addEventListener('input', () => console.log(gridSize));
document.body.addEventListener('mouseup', () => mouseDown = false);
document.body.addEventListener('mousedown', () => mouseDown = true);

makeGrid(gridSize*gridSize);

function makeGrid (count) {
    removeBoxes(sketchPad);
    for (let i=1; i <= count; i++) {
        const newBox = document.createElement('div');
        newBox.style.height = 500/gridSize + 'px';
        newBox.style.width = 500/gridSize + 'px';
        newBox.classList.add('gridBox');
        newBox.addEventListener('mousedown', changeColor);
        newBox.addEventListener('mouseover', changeColor);
        sketchPad.appendChild(newBox);
    };
};

function eraseMode () {
    if (activeColor === 'black') {
        eraser.style.backgroundColor = 'yellow';
        activeColor = 'white';
    }
    else if (activeColor === 'white') {
        eraser.style.backgroundColor = 'buttonface';
        activeColor = 'black';
    }
}

// for (let i=1; i <= numberBoxes; i++) {
//     const newBox = document.createElement('div');
//     newBox.style.height = boxHeight;
//     newBox.style.width = boxWidth;
//     newBox.classList.add('gridBox');
//     newBox.addEventListener('mousedown', changeColor);
//     newBox.addEventListener('mouseover', changeColor);
//     sketchPad.appendChild(newBox);
// };

// following creates nodelist of all elements of class gridBox
// let gridBox = document.querySelectorAll('.gridBox');

// console.log(gridBox);

//following adds eventlistener to each node of nodelist
// for (const oneBox of gridBox) {
//     oneBox.addEventListener('mousedown', changeColor);
//     oneBox.addEventListener('mouseover', changeColor);
// };

function changeColor (e) {
    // console.log(mouseDown);
    // console.log(e.type);
    if (mouseDown || (e.type === 'mousedown')) {
        e.target.style.backgroundColor = activeColor;
    }
};

function clearBoxes () {
    let gridBox = document.querySelectorAll('.gridBox');
    for (const oneBox of gridBox) {
        oneBox.style.backgroundColor = 'white';
    }
};

function removeBoxes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
};
