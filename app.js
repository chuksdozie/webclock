
const update = setInterval(mtf, 2000);

function mtf(){
    var mytime = new Date();
    document.getElementById("time").innerHTML = mytime.toLocaleTimeString();
    document.getElementById("date").innerHTML = mytime.toDateString();
}