const gridContainer = document.querySelector('.grid-container');

function setGrid(size) {
    gridContainer.setAttribute('style', ' \
    display: grid; \
    grid-template-columns: repeat('+ size + ', auto); \
    grid-template-rows: repeat('+ size + ', auto);');
}

function populateGrid(size){
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

function setColor(e){
    boxClicked = document.querySelector('#'+this.id);
    console.log(boxClicked);
    boxClicked.setAttribute('style','background-color: black;');
}

let size = 20;
generateGrid(size);
const allGridItems = document.querySelectorAll('.grid-block');
allGridItems.forEach(div => div.addEventListener('click',setColor));
document.getElementById("reset").onclick = function() {myFunction()};

