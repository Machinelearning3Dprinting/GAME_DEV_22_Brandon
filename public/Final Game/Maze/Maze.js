///<script src="../YAHCAL.js"></script>

/*function init() {

    $.getScript("my_lovely_script.js", function () {
        alert("Script loaded but not necessarily executed.");
    });

}*/

myNewArray = 50;

function RandArrayMake(myID) {
    myNumber = [];
    //myID = toString(myID)
    myNewArray = myNewArray/4

    for (i = 0; i < myNewArray; i++) {
        for (q = 1; q < 4; q++) {

            RandNumber = Math.random() * 10;

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

        console.log(myNumber)
    }

    //document.getElementById(myID).innerHTML = '...';
    //document.getElementById(myID).innerHTML = myNumber;
}

function MakeMazeLine() {

    for (i = 0;i in myNewArray;i++) {
        console.log('n')
    }
}