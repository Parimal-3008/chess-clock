let p2 = document.getElementById("timer2");


if (localStorage.getItem("Format") == "Choose the game format")
    p2.innerText = "BLITZ / RAPID";
else
    p2.innerText = localStorage.getItem("Format");

let wi = (localStorage.getItem("whiteInitial"));
let bi = (localStorage.getItem("blackInitial"));
let binc = (localStorage.getItem("blackInc1"));
let winc = (localStorage.getItem("whiteInc1"));
let moves1 = localStorage.getItem("NoOfMoves1");
let moves2 = localStorage.getItem("NoOfMoves2");
let wat2 = localStorage.getItem("WAT2");
let bat2 = localStorage.getItem("BAT2");
let winc2 = localStorage.getItem("WIncT2");
let binc2 = localStorage.getItem("BIncT2");
let wat3 = localStorage.getItem("WAT3");
let bat3 = localStorage.getItem("BAT3");
let winc3 = localStorage.getItem("WIncT3");
let binc3 = localStorage.getItem("BIncT3");

let mo = 0;
a = { "time": wi * 60, "inc1": winc, "inc2": winc2, "at2": wat2, "at3": wat3, "inc3": winc3 };
b = { "time": bi * 60, "inc1": binc, "inc2": binc2, "at2": bat2, "at3": bat3, "inc3": binc3 };
function clockstart() {
    cj();
}
let yo;
let yu;
console.log(b.inc1);
console.log(a.inc1);
function cj() {
    window.onkeydown = function (gfg) {
        if (gfg.keyCode === 32) {
            mo++;

        };
        console.log(mo);
        if (mo == moves1 * 2) {
            b.time += (parseInt(b.at2)*60);
            a.time += (parseInt(a.at2)*60);
            f1();
            f2();
            a.inc1 = a.inc2;
            b.inc1 = b.inc2;

        }
        if (mo == moves2 * 2) {
            b.time += (parseInt(b.at3)*60);
            a.time += (parseInt(a.at3)*60);
            f1();
            f2();
            a.inc1 = a.inc3;
            b.inc1 = b.inc3;

        }

        if (mo % 2 == 1) {
            if (mo != 1) {
                b.time += (parseInt(b.inc1) + 1);
                f1();
            }
            yo = setInterval(whitecountdown, 1000);
            clearInterval(yu);

        }
        else {
            if (mo != 0) {
                a.time += (parseInt(a.inc1) + 1);
                f2();
            }
            yu = setInterval(blackcountdown, 1000);
            clearInterval(yo);
        }
    };
}
function whitecountdown() {
    f2();
    a.time--;
}
function blackcountdown() {
    f1();
    b.time--;

}
function f1() {
    min1 = Math.floor(b.time / 60);
    sec1 = b.time % 60;
    if (min1 < 10)
        min1 = "00" + min1;
    else if (min1 < 100)
        min1 = "0" + min1;
    if (sec1 < 10)
        sec1 = "0" + sec1;
    document.getElementById("BLACK").innerText = min1 + " " + sec1;
}
function f2() {
    min = Math.floor(a.time / 60);
    sec = a.time % 60;
    if (min < 10)
        min = "00" + min;
    else if (min < 100)
        min = "0" + min;
    if (sec < 10)
        sec = "0" + sec;
    document.getElementById("WHITE").innerText = min + " " + sec;

}