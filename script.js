const gridContainer = document.querySelector('.grid-container');

//generate the number of rows and columns
function setGrid(size) {
    gridContainer.setAttribute('style', ' \
    display: grid; \
    grid-template-columns: repeat('+ size + ', auto); \
    grid-template-rows: repeat('+ size + ', auto);');
}

//Adds divs to each grid section
function populateGrid(size) {
    for (let i = 0; i < size * size; i++) {
        gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'grid-block');
        gridItem.setAttribute('id', ('grid-block-' + (i + 1)));
        gridItem.textContent = " "
        gridContainer.appendChild(gridItem);
    }
}

function generateGrid(size) {
    setGrid(size);
    populateGrid(size);
}

function setColor(e) {
    boxClicked = document.querySelector('#' + this.id);
    boxClicked.setAttribute('style', 'background-color: black;');
}

function resetCanvas() {
    allGridItems.forEach(div => div.setAttribute('style', 'background-color: white;'));
}

function deleteGrid() {
    document.querySelectorAll(".grid-block").forEach(e => e.remove());
}

function setListenters(){
    let allGridItems = document.querySelectorAll('.grid-block');
    allGridItems.forEach(div => div.addEventListener('mouseover', setColor));
    document.getElementById("reset").onclick = function () { resetCanvas() };

}
    
let size = 20;
generateGrid(size);
setListenters();
let allGridItems = document.querySelectorAll('.grid-block');
document.getElementById("reset").onclick = function () { resetCanvas() };

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.textContent = slider.value + " x " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.textContent = this.value + " x " + slider.value;
} 
slider.onchange = function () {
    size = slider.value
    deleteGrid();
    generateGrid(size);
    setListenters();
} 