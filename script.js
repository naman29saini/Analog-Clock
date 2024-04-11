/*
Degree for each hands-->>

hand for Hours:-
12 hour=360 deg
1 hour=360/12 deg=30 deg
---->>>>  h hour=30h deg + m/2 deg

1 hour=60 min=30deg
1 min=30/60 deg
m min=(1/2)m deg


hand for minutues:-
60 min= 360 deg
1 min=360/60= 6 deg
---->>>>  m min= 6m deg


hand for seconds:-
60 sec=360 deg
1 sec=360/60 deg
---->>>>  s sec=6s deg
*/

let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displayTime()
{
    let date=new Date();
    // get hour,min and sec from date
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation= 30*hh + mm/2;
    let mRotataion= 6*mm;
    let sRotataion= 6*ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotataion}deg)`;
    sec.style.transform=`rotate(${sRotataion}deg)`;
}

setInterval(displayTime, 1000);