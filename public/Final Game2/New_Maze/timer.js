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