function BuildMaze() {

    if (Charactercheck == null) {

        Charactercheck = 0

        cellsizesetter = Charactercheck

        localStorage.setItem("mySize", cellsizesetter)

        cellsize = myCellsizeSet[cellsizesetter]

        document.getElementById('myh102').innerHTML = "Difficulty " + mydiff

    } else {

        cellsize = myCellsizeSet[Charactercheck]

        document.getElementById('myh102').innerHTML = "Difficulty " + mydiff

    }

    Charactercheck = parseInt(localStorage.getItem("mySize"))
    pointCheck = localStorage.getItem("myPoints")

    if (pointCheck == null) {

        //cellsize = myCellsizeSet[0]

        cellsizestter = Charactercheck

        cellsize = myCellsizeSet[cellsizesetter]
        points = []
        MakeNewMaze()
        MakeMazeStorage()

    } else {

        cellsizestter = Charactercheck

        cellsize = myCellsizeSet[cellsizesetter]

        pointCheck = eval('[' + pointCheck + ']')
        useMazeStorage()
        MakeCurrentMaze()
    }

}

function MakeMazeStorage() {

    myTempMapArray = [];
    start = 0;
    end = start + 4;
    for (let i = 0; i < points.length / 4; i++) {
        myTempMapArray.push(points.slice(start, end))
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
        start = start + 4;
        end = start + 4;
    }

    return myTempMapArray

}

function MakeCurrentMaze() {

    for (let i = 0; i in myTempMapArray; i++) {
        line(myTempMapArray[i][0], myTempMapArray[i][1], myTempMapArray[i][2], myTempMapArray[i][3]);
        draw('black')
    }

    return myTempMapArray
}

function MakeNewMaze() {

    points = []

    for (let y = 0; y <= canvas.height; y += cellsize) {
        for (let x = 0; x <= canvas.width; x += cellsize) {
            switch (Math.round(Math.random())) {

                case 0: switch (Math.round(Math.random())) {

                    case 0: line(x, y, x + cellsize, y); points.push([x, y, x + cellsize, y]); break;

                    case 1: line(x, y, x + cellsize, y); points.push([x, y, x + cellsize, y]); break;

                } break;

                case 1: switch (Math.round(Math.random())) {

                    case 0: line(x, y, x, y + cellsize); points.push([x, y, x, y + cellsize]); break;

                    case 1: line(x, y, x, y - cellsize); points.push([x, y, x, y - cellsize]); break;

                } break;

            }
            draw('black')

            line(pl.x, pl.y, pl.s, pl.s)
            draw('white')

        }
        //////////////////////////////////console.log(points)
        localStorage.setItem("myPoints", points)

    }

}