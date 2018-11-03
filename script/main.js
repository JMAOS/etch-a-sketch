document.addEventListener("load", function(){

const gridSize = 16; 

var element = document.getElementById("container");

square.className = "square";
element.appendChild(square);

for(i=0; i<gridSize; i++){
    var square = document.createElement("div");
    element.appendChild(square);
}
document.removeChild(element);

});

