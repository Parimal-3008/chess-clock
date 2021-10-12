
function optionchoosed( gameformat) {
    let p1 = document.getElementById("time");
    
    // console.log(p1.innerHTML);
    p1.innerText = gameformat;
    toggledisplay();
   
    if(gameformat == "Classical")
    {
        for( let i=0;i<  document.getElementsByClassName("TimeControl1").length;i++)
        {
            document.getElementsByClassName("TimeControl1")[i].style.visibility="visible";
        }
        for( let i=0;i<  document.getElementsByClassName("TimeControl2").length;i++)
        {
            document.getElementsByClassName("TimeControl2")[i].style.visibility="visible";
        }
    }
    else
    {
        for( let i=0;i<  document.getElementsByClassName("TimeControl1").length;i++)
        {
            document.getElementsByClassName("TimeControl1")[i].style.visibility="hidden";
        }
        for( let i=0;i<  document.getElementsByClassName("TimeControl2").length;i++)
        {
            document.getElementsByClassName("TimeControl2")[i].style.visibility="hidden";
        }

    }
    
}
let rotation = 0;
function toggledisplay() {
    for (let i = 0; i < 4; i++) {
        if (document.getElementsByClassName('box1')[i].style.visibility === "visible")
            document.getElementsByClassName("box1")[i].style.visibility = "hidden";

        else
            document.getElementsByClassName("box1")[i].style.visibility = "visible";

    }
    r3();
    MOVE();
}
function r3()
{
    img=document.getElementById("arrow");
   if(img.style.transform == "rotate(180deg)")
   {
      img.style.transform = "rotate(0deg)";
   }    
    else
    {
        img.style.transform = "rotate(180deg)";
        img.style.padding = "12px";

    }
    img.style.transition= "transform 0.1s ease ";
    
    
}
function handleChange(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 60) input.value = 60;
}
function handleChange2(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 200) input.value = 200;
}
function handleChange3(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 100) input.value = 100;
}
function handleChange4(input) {
    if (input.value < 30) input.value = 30;
    if (input.value > 60) input.value = 60;
}
function handleChange5(input) {
    if (input.value < 60) input.value = 60;
    if (input.value > 80) input.value = 80;
}

function MOVE()
{
     let p1 = document.getElementById("time");
     localStorage.setItem("Format", p1.innerText);
     console.log(p1.innerText);

     localStorage.setItem("whiteInitial", document.getElementById("WIT").value );
     localStorage.setItem("whiteInc1", document.getElementById("WIncT").value );
     localStorage.setItem("blackInitial", document.getElementById("BIT").value );
     localStorage.setItem("blackInc1", document.getElementById("BIncT").value );
     console.log(document.getElementById("WIT").value);
     if(p1.innerText == "Classical")
     {
        localStorage.setItem("NoOfMoves1",document.getElementById("tc1").value);
        localStorage.setItem("WAT2",document.getElementById("WAT2").value);
        localStorage.setItem("BAT2",document.getElementById("BAT2").value);
        localStorage.setItem("WIncT2",document.getElementById("WIncT2").value);
        localStorage.setItem("BIncT2",document.getElementById("BIncT2").value);
        localStorage.setItem("NoOfMoves2",document.getElementById("tc2").value);
        localStorage.setItem("WAT3",document.getElementById("WAT3").value);
        localStorage.setItem("BAT3",document.getElementById("BAT3").value);
        localStorage.setItem("WIncT3",document.getElementById("WIncT3").value);
        localStorage.setItem("BIncT3",document.getElementById("BIncT3").value);

     }
     else
     {
        localStorage.setItem("NoOfMoves1",-1);
        localStorage.setItem("WAT2",-1);
        localStorage.setItem("BAT2",-1);
        localStorage.setItem("WIncT2",-1);
        localStorage.setItem("BIncT2",-1);
        localStorage.setItem("NoOfMoves2",-1);
        localStorage.setItem("WAT3",-1);
        localStorage.setItem("BAT3",-1);
        localStorage.setItem("WIncT3",-1);
        localStorage.setItem("BIncT3",-1);
     }
    
}
