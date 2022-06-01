myNewArrayBasic = 50;
myNumber = [];
arrayCounter = 0;

function RandArrayMake(myID) {
    myNumber = [];
    //myID = toString(myID)
    myNewArrayComplex = myNewArrayBasic /// 4

    arrayCounter = 0;

    myGetCanvasSize();

    for (i = 0; i < myNewArrayComplex; i++) {
        for (q = 1; q < 4; q++) {

            RandNumber = Math.floor((Math.random() * 10) + (10 * (myWidth_Height / myWidth_Height)));
            console.log(RandNumber);

            myNumber.push(Math.floor(RandNumber))

            if ((q % 3) == 0) {

                RandNumber = Math.floor(Math.random() * 10);

                if (RandNumber >= 5) {

                    myNumber.push('1')

                }

                if (RandNumber <= 4) {

                    myNumber.push('0')

                }
            }
        }

        arrayCounter++;

        //console.clear()
        //console.log(myNumber)
    }

    //console.log(myNumber)

    //document.getElementById(myID).innerHTML = '...';
    //document.getElementById(myID).innerHTML = myNumber;
}

function MakeMazeLine() {

    myTempMapArray = [];
    start = 0;
    end = start + 4;
    for (i = 0; i < arrayCounter; i++) {
        myTempMapArray.push(myNumber.slice(start, end))
        //console.log(myTempMapArray[i] + ' count = ' + i)
        //console.log('n')
        start = start + 4;
        end = start + 4;
    }

    for (q = 0; q < arrayCounter; q++) {



        for (i = 0; i < 3; i++) {
            //console.log(myTempMapArray[q][i] + ' Count' + q + ' ' + i)

            checkDir = myTempMapArray[q][3]

            if (i == 0) {

                myXCord = myTempMapArray[q][0]

            }

            if (i == 1) {

                myYCord = myTempMapArray[q][1]

            }

            if (i == 2) {

                myGetCanvasSize()

                if (checkDir == "1") {

                    myLineLengthW = myYCord * myTempMapArray[q][2]
                    myLineLengthH = 10 * (myWidth_Height / myWidth_Height)

                }

                if (checkDir == "0") {

                    myLineLengthH = myXCord * myTempMapArray[q][2]
                    myLineLengthW = 10 * (myWidth_Height / myWidth_Height)

                }
            }
        }

        rect(myXCord, myYCord, myLineLengthW, myLineLengthH);
        fill("white")

    }

    //return myXCord, myYCord, myLineLengthW, myLineLengthH




    //rect(myXCord, myYCord, myLineLengthW, myLineLengthH);




    //testing 
    /*console.log(myTempMapArray[0])
    for (i = 0; i < 4; i++) {
        console.log(myNumber[i])
        console.log(myTempMapArray[0][i])
        console.log()
    }*/
}

