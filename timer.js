function countdown(){

let now = new Date();
let next = new Date();

next.setMinutes(
Math.ceil(now.getMinutes()/15)*15
);

let diff = next-now;

let m = Math.floor(diff/60000);
let s = Math.floor((diff%60000)/1000);

document.getElementById("countdown")
.innerText = m+"m "+s+"s";

}

setInterval(countdown,1000);