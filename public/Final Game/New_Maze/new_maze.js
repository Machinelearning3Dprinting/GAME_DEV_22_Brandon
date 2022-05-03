newCanvas()
background("black")
let cellsize = 100

pointCheck = localStorage.getItem("myPoints")

function BuildMaze() {

    if (pointCheck == null) {

        points = []
        MakeNewMaze()
        MakeMazeStorage()

    } else {
        pointCheck = eval('[' + pointCheck + ']')
        useMazeStorage()
        MakeCurrentMaze()
    }

    makeMyCharater();

}

function MakeMazeStorage() {

    myTempMapArray = [];
    start = 0;
    end = start + 4;
    for (let i = 0; i < points.length / 4; i++) {
        myTempMapArray.push(points.slice(start, end))
        console.log(myTempMapArray[i] + ' count = ' + i)
        //console.log('n')
        start = start + 4;
        end = start + 4;
    }

    return myTempMapArray

}


function useMazeStorage() {

    myTempMapArray = [];
    start = 0;
    end = start + 4;
    for (let i = 0; i < pointCheck.length / 4; i++) {
        myTempMapArray.push(pointCheck.slice(start, end))
        console.log(myTempMapArray[i] + ' count = ' + i)
        //console.log('n')
        start = start + 4;
        end = start + 4;
    }

    return myTempMapArray

}

function MakeCurrentMaze() {

    for (let i = 0; i in myTempMapArray; i++) {
        line(myTempMapArray[i][0], myTempMapArray[i][1], myTempMapArray[i][2], myTempMapArray[i][3]);
        draw('white')
    }

    return myTempMapArray
}

function MakeNewMaze() {

    points = []

    for (let y = 0; y <= canvas.height; y += cellsize) {
        for (let x = 0; x <= canvas.width; x += cellsize) {
            switch (Math.round(Math.random())) {

                case 0: line(x, y, x + cellsize, y); points.push([x, y, x + cellsize, y]); break;

                case 1: line(x, y, x, y + cellsize); points.push([x, y, x, y + cellsize]); break;

            }
            draw('white')
        }
    }
    //console.log(points)
    localStorage.setItem("myPoints", points)
}

//MakeNewMaze()

//MakeMazeStorage()
//MakeCurrentMaze()

//BuildMaze()

console.log(eval('[' + pointCheck + ']'))

let myCharater = {
    MyCharaterSize: cellsize,
    MyCPX: 0,
    MyCPY: 0,
    myTCPX: MyCharaterPlacementX,
    myTCPY: myTempCharaterPlacementY    
}



function makeMyCharater() {

    //MyCharaterSize = cellsize

    //MyCharaterSize = (cellsize - (cellsize * 0.35))

    //MyCharaterPlacementX = 0;

    //MyCharaterPlacementY = 0//MyCharaterPlacementX

    //MyCharaterPlacementX = ((cellsize - MyCharaterSize) / 2)

    //MyCharaterPlacementY = ((cellsize - MyCharaterSize) / 2)

    rect(myCharater.MyTCPX, myCharater.MyCharaterPlacementY, myCharater.MyCharaterSize, myCharater.MyCharaterSize)
    fill('red')

    console.log(myCharater.MyCharaterSize)
    console.log("X " + myCharater.MyCharaterPlacementX + " " + "Y " + myCharater.MyCharaterPlacementY)

}

/*let myTempCharaterPlacementX = 0;
let myTempCharaterPlacementY = 0;

myTempCharaterPlacementX = MyCharaterPlacementX;
myTempCharaterPlacementY = MyCharaterPlacementY;*/


function CharacterControl() {
    clearCharater()




    clearCharater()

    rect(myCharater.myTCPX, myCharater.MyCharaterPlacementY, myCharater.MyCharaterSize, myCharater.MyCharaterSize)
    fill('red')

    myCharater.myTCPX += myCharater.MyCharaterPlacementX + cellsize
    myCharater.myTCPY += myCharater.MyCharaterPlacementY + cellsize




}

function autoMove() {

    setInterval(CharacterControl, 500)

}


function clearCharater() {

    x = myTempCharaterPlacementX - 1
    y = x
    width = MyCharaterSize + 2
    height = width

    objectClear(x, y, width, height)

}
function gameloop() {

    requestAnimationFrame(gameLoop)
}
gameloop()

makeMyCharater()
//CharacterControl()