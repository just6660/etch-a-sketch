const container = document.getElementById("container");
const clear = document.querySelector("#clear");

makeRows(16,16);

clear.addEventListener('click', changeSize);

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }

function makeRows(rows,cols){
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (let i = 0; i < rows * cols; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-item";
        gridElement.addEventListener("mouseover", changeColor);
        container.appendChild(gridElement);
    }
};


function changeSize(){
    let newSize = prompt("Enter a new size");
    newSize = parseInt(newSize);
    //clear grid
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
    //set grid size
    makeRows(newSize,newSize);
    




};




