newCanvas()
background("black")
Charactercheck = localStorage.getItem("mySize")
//0,  1,  2,  3,  4,  5,  6
let myCellsizeSet = [100, 60, 50, 30, 20, 12, 10]
var cellsizesetter = Charactercheck
var cellsize = myCellsizeSet[cellsizesetter]
let CDivisor = 1.25
let r = Math.round(Math.random() * 10) * 25
let b = Math.round(Math.random() * 10) * 25
let g = Math.round(Math.random() * 10) * 25

levelNumber = localStorage.getItem("MyCurrentLevel")

if (levelNumber == null) {

    levelNumber = 1

    localStorage.setItem("MyCurrentLevel", levelNumber)

    document.getElementById('myh101').innerHTML = "Level " + levelNumber

} else {

    levelNumber = localStorage.getItem("MyCurrentLevel")

    document.getElementById('myh101').innerHTML = "Level " + levelNumber
}

let img = new Image;

pointCheck = localStorage.getItem("myPoints")

let mydiff = parseInt((parseInt(cellsizesetter) + 1))

//console.log(mydiff)

isNaN(mydiff)

if (isNaN(mydiff) == true) {

    //document.location.reload()

    setTimeout((function () {
        window.location.reload();
    }), 250);

    //setTimeout(window.location.reload, 250)
}

//console.log(mydiff)

pl = {
    x: canvas.width / 2,
    y: canvas.width / 2,
    s: cellsize / CDivisor,
}

let levelcheck = 0

levelcheck = localStorage.getItem("DiffSet")

if (levelcheck == null) {

    levelcheck = 0

}

function loop() {

    canvasClear()
    background("white")
    BuildMaze()

    circle(pl.x + (pl.s * CDivisor) / 2, pl.y + (pl.s * CDivisor) / 2, (pl.s) / 2)
    fill('rgb(' + r + ',' + g + ',' + b + ')')
    img.src = (canvas.toDataURL())
    //console.log(canvas.ctx.getImageData(0, 0, canvas.width, canvas.height).data)
    requestAnimationFrame(loop)

}