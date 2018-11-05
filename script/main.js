
const gridSize = 16; 
const squareHeightWidth = 100 / gridSize;


var element = document.querySelector("#container")
element.style.backgroundColor = "blue";

var square = [];


createGrid();



function createGrid(){

    for(i=0; i<gridSize; i++){
        for(j=0; j<gridSize; j++){
            square[j + gridSize * i] = document.createElement("div");
            square[j + gridSize * i].style.backgroundColor = "white";
            square[j + gridSize * i].style.height = squareHeightWidth + "%";
            square[j + gridSize * i].style.width = squareHeightWidth + "%";
            square[j + gridSize * i].setAttribute("id", "square" + "X" + i + "Y" +j);
            square[j + gridSize * i].style.display = "inline-block";
            element.appendChild(square[j + gridSize * i]);

            square[j + gridSize * i].addEventListener("mouseenter", function(){
                square.style.backgroundColor = "red";
            });
        }

        
    }
}



