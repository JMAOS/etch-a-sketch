
const gridSize = 64; 
const squareHeightWidth = 100 / gridSize;


var element = document.querySelector("#container")
element.style.backgroundColor = "blue";

let square = [];


createGrid();



function createGrid(){

    for( let i=0; i<gridSize; i++){
        for( let j=0; j<gridSize; j++){
            square[j + gridSize * i] = document.createElement("div");
            square[j + gridSize * i].style.backgroundColor = "white";
            square[j + gridSize * i].style.height = squareHeightWidth + "%";
            square[j + gridSize * i].style.width = squareHeightWidth + "%";
            square[j + gridSize * i].setAttribute("id", "square" + "X" + i + "Y" +j);
            square[j + gridSize * i].style.display = "inline-block";
            element.appendChild(square[j + gridSize * i]);

            square[j + gridSize * i].addEventListener("mouseenter", function(){
                console.log("Entered:" + (j + gridSize * i));
                square[j + gridSize * i].style.backgroundColor = "blue";
            });
        }

        
    }
}



