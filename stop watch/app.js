var milli = 0;
var sec = 0;
var min = 0;
var hr = 0;


var timer = false;

function start(){
    timer = true;
    myfun();
}

function stop(){
    clearInterval()
    myfun()   
}
function reset(){
    location.reload();
    myfun();
}

function myfun(){
    if(timer = true){
milli = milli + 1

if(milli == 100){
    sec = sec+1
    milli = 0
}
if(sec == 60){
    min = min+1
    sec = 0
}
if(min == 60){
    hr = hr + 1
    min = 0
}



var getsec = sec;
var getmin = min;
var gethr = hr;
if(sec < 10){
    getsec = "0"+ sec
}
if(min < 10){
    getmin = "0"+ min
}
if(hr < 10 ){
    gethr = "0"+ hr
}



setTimeout("myfun()", 10)
document.getElementById("milli").innerHTML =milli;
document.getElementById("sec").innerHTML =getsec;
document.getElementById("min").innerHTML =getmin;
document.getElementById("hr").innerHTML =gethr;

    }
}