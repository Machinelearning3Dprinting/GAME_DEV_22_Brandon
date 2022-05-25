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

setInterval(levelChange, 500)