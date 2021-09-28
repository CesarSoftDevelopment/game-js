

// taking the body to show the game in html page
bodyPage = document.querySelector("body");

// function that plays an area of ​​the game
bodyPage.onload = function startGame(){
    myGameArea.start();
    //instantiating the constructor function
    myGamePiece = new component(30, 30, 'blue', 50, 50);
}

// object to create game area
const myGameArea = {
    canvas: document.createElement("canvas"),
    start() {
        this.canvas.width = 800;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

// function to create the component
function component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStytle = color;
    ctx.fillRect = (this.x, this.y, this.width, this.height);

}