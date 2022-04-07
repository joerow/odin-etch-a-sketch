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
        gridItem.setAttribute('id', ('grid-item' + (i + 1)));
        gridItem.textContent = " "
        gridContainer.appendChild(gridItem);
    }
}

function generateGrid(size) {
    setGrid(size);
    populateGrid(size);
}

let size = 5;
generateGrid(size);

