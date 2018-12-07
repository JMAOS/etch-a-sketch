
let gridSize = 16; 
let squareHeightWidth = 100 / gridSize;


var element = document.querySelector("#content")
element.style.backgroundColor = "white";

let square = [];


createGrid();



function createGrid(){
    let mouseenterCounter = 0;

    for( let i=0; i<gridSize; i++){
        for( let j=0; j<gridSize; j++){
            square[j + gridSize * i] = document.createElement("div");
            square[j + gridSize * i].style.backgroundColor = "white";
            square[j + gridSize * i].style.height = squareHeightWidth + "%";
            square[j + gridSize * i].style.width = squareHeightWidth + "%";
            square[j + gridSize * i].setAttribute("id", "square" + "X" + i + "Y" +j);
            square[j + gridSize * i].style.display = "inline-block";
            square[j + gridSize * i].style.verticalAlign = "top";
            square[j + gridSize * i].mouseenterCounter = 0;
            element.appendChild(square[j + gridSize * i]);

            square[j + gridSize * i].addEventListener("mouseenter", function(){
                square[j + gridSize * i].mouseenterCounter ++;
                console.log("Entered:" + (j + gridSize * i));
                square[j + gridSize * i].style.opacity = square[j + gridSize * i].mouseenterCounter * 0.1;
                square[j + gridSize * i].style.backgroundColor = "black";
            });
        }

        
    }
}

function clearGrid(){
    gridSize = prompt("Please enter the grid size", "16");

    if(gridSize != null){
        square.forEach( s => {
            element.removeChild(s);
        });
        squareHeightWidth = 100 / gridSize;
        createGrid();
    }

}

