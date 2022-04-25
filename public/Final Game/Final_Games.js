function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Maze() {

    location = './Maze/Maze.html'
}

function Pong() {

    location = './Pong/Pong.html'
}


function Snake() {

    location = './Snake/Snake.html'
}


function initStartUp() {

    var myTime = 4000 * 2

    var myStorage = localStorage.getItem('myStoredText')

    if (myStorage == null) {

        document.body.style.backgroundImage = "url('./Arcade_edit8.gif')";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "auto 100vh";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
        setTimeout(StartUp, myTime);
    }

    if (myStorage != null) {

        StartUp()

    }
}

function StartUp() {
    localStorage.setItem('myStoredText', null)
    // myStorage = localStorage.getItem('myStoredText')



    document.body.style.backgroundImage = "none";

    document.body.style.visibility = "visible"

    document.body.style.backgroundColor = "black";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "auto 100vh";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

}