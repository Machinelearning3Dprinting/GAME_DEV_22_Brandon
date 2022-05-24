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

console.log(mydiff)

isNaN(mydiff)

if (isNaN(mydiff) == true) {

    //document.location.reload()

    setTimeout((function() {
        window.location.reload();
      }), 250);

    //setTimeout(window.location.reload, 250)
}

//console.log(mydiff)

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

pl = {
    x: canvas.width / 2,
    y: canvas.width / 2,
    s: cellsize / CDivisor,
}
grid = []
let rows = []

let levelcheck = 0

levelcheck = localStorage.getItem("DiffSet")

if (levelcheck == null) {

    levelcheck = 0

}

function levelChange() {
    checkcollision()

    if ((rows[pl.s * CDivisor - 1][pl.s * CDivisor / 2][0]) == 0) {

        levelNumber++

        localStorage.setItem("MyCurrentLevel", levelNumber)



        if (cellsizesetter != 6) {

            levelcheck++

            localStorage.setItem("DiffSet", levelcheck)

            levelcheck = localStorage.getItem("DiffSet")

            //console.log(levelcheck)

            if (levelcheck >= 3) {

                cellsizesetter++
                levelcheck = 0

                localStorage.setItem("DiffSet", levelcheck)

            }
        }

        cellsize = myCellsizeSet[cellsizesetter]

        localStorage.setItem("mySize", cellsizesetter)
        localStorage.setItem("DiffSet", levelcheck)


        MakeNewMaze();
        location.reload();

    }


}

function checkcollision() {

    var imgd = canvas.ctx.getImageData(pl.x, pl.y, pl.s * CDivisor, pl.s * CDivisor);
    var pix = imgd.data;
    let data = [];
    for (let i = 0; i < pix.length; i += 4) {
        data.push(pix.slice(i, i + 4))
    }
    rows = []
    for (let y = 0; y < pl.s * CDivisor; y++) {
        let temp = []
        for (let x = 0; x < pl.s * CDivisor; x++) {
            temp.push(data[y * pl.s * CDivisor + x])
        }
        rows.push(temp)
    }

    return rows;


}

window.addEventListener("keydown", e => {

    checkcollision()
    //console.log(e)

    if (e.key == ('w') && rows[0][pl.s * CDivisor / 2][0] == 255) { pl.y -= pl.s * CDivisor }
    if (e.key == ('a') && rows[pl.s * CDivisor / 2][0][0] == 255) { pl.x -= pl.s * CDivisor }
    if (e.key == ('s') && rows[pl.s * CDivisor - 1][pl.s * CDivisor / 2][0] == 255) { pl.y += pl.s * CDivisor }
    if (e.key == ('d') && rows[pl.s * CDivisor / 2][pl.s * CDivisor - 1][0] == 255) { pl.x += pl.s * CDivisor }

    if (e.keyCode == (38) && rows[0][pl.s * CDivisor / 2][0] == 255) { pl.y -= pl.s * CDivisor }
    if (e.keyCode == (37) && rows[pl.s * CDivisor / 2][0][0] == 255) { pl.x -= pl.s * CDivisor }
    if (e.keyCode == (40) && rows[pl.s * CDivisor - 1][pl.s * CDivisor / 2][0] == 255) { pl.y += pl.s * CDivisor }
    if (e.keyCode == (39) && rows[pl.s * CDivisor / 2][pl.s * CDivisor - 1][0] == 255) { pl.x += pl.s * CDivisor }

})
for (let x = 0; x < canvas.width; x += cellsize) {
    let temp = []
    for (let y = 0; y < canvas.height; y += cellsize) {
        let r = 0
        temp.push({ x: x, y: y, value: r })
    }
    grid.push(temp)
}

function loop() {

    //try {

    canvasClear()
    background("white")
    BuildMaze()

    circle(pl.x + (pl.s * CDivisor) / 2, pl.y + (pl.s * CDivisor) / 2, (pl.s) / 2)
    fill('rgb(' + r + ',' + g + ',' + b + ')')
    img.src = (canvas.toDataURL())
    //console.log(canvas.ctx.getImageData(0, 0, canvas.width, canvas.height).data)
    requestAnimationFrame(loop)

   // } catch(err) {throw location.reload()}

}

setInterval(levelChange, 500)

var dx = 5;
var dy = 5;
var x = 210;
var y = 10;

time = {
    s: 0,
    m: 0,
    h: 0,
    timeS: '',
    timeM: '',
    timeH: '',
}


function mytimer() {

    time.s++

    if (time.s >= 60) {
        time.m++
        time.s = 0
    }

    if (time.m >= 60) {
        time.h++
        time.m = 0
    }

    if (time.s < 10) {

        time.timeS = "0" + time.s

    } else { time.timeS = time.s }

    if (time.m < 10) {

        time.timeM = "0" + time.m

    } else { time.timeM = time.m }

    if (time.h < 10) {

        time.timeH = "0" + time.h

    } else { time.timeH = time.h }

    //console.log("H " + time.timeH + " M " + time.timeM + " S " + time.timeS)

    mytime = time.timeH + ":" + time.timeM + ":" + time.timeS

    /*sessionStorage.setItem("fullTime", mytime)
    sessionStorage.setItem("Seconds", time.timeS)
    sessionStorage.setItem("Minutes", time.timeM)
    sessionStorage.setItem("Hour", time.timeH)*/

    return mytime;

}

function initTimer() {

    setTimeout(initTimer, 1000)

    document.getElementById('mydiv01').innerHTML = mytimer()
}

/*function scoring() {

    TestTime = parseInt(sessionStorage.getItem("fullTime"))

    //console.log(TestTime)

    switch (mydiff) {

        case 1: console.log('1'); break;

        case 2: console.log('2'); break;

        case 3: console.log('3'); break;

        case 4: console.log('4'); break;

        case 5: console.log('5'); break;

        case 6: console.log('6'); break;

        case 7: console.log('7'); break;

    }
}*/