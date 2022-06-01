let rows = []

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


    switch (e.key) {

        case 'w': if (rows[0][pl.s * CDivisor / 2][0] == 255) { pl.y -= pl.s * CDivisor }; break;

        case 'a': if (rows[pl.s * CDivisor / 2][0][0] == 255) { pl.x -= pl.s * CDivisor }; break;

        case 's': if (rows[pl.s * CDivisor - 1][pl.s * CDivisor / 2][0] == 255) { pl.y += pl.s * CDivisor }; break;

        case 'd': if (rows[pl.s * CDivisor / 2][pl.s * CDivisor - 1][0] == 255) { pl.x += pl.s * CDivisor }; break;



        case 'ArrowUp': if (rows[0][pl.s * CDivisor / 2][0] == 255) { pl.y -= pl.s * CDivisor }; break;

        case 'ArrowLeft': if (rows[pl.s * CDivisor / 2][0][0] == 255) { pl.x -= pl.s * CDivisor }; break;

        case 'ArrowDown': if (rows[pl.s * CDivisor - 1][pl.s * CDivisor / 2][0] == 255) { pl.y += pl.s * CDivisor }; break;

        case 'ArrowRight': if (rows[pl.s * CDivisor / 2][pl.s * CDivisor - 1][0] == 255) { pl.x += pl.s * CDivisor }; break;


        case ('Alt' && '='): levelChange2(); break;

        case ('Alt' && '-'): levelChange3(); break;

    }

})