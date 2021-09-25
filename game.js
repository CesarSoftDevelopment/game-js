

// taking the body to show the game in html page
bodyPage = document.querySelector("body");

// function that plays an area of ​​the game
bodyPage.onload = function startGame(){
    myGameArea.start();
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