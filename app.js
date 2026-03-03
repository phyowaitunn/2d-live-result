async function loadSET(){

try{

const response = await fetch(
"https://api.allorigins.win/raw?url=https://www.set.or.th/api/set/index"
);

const data = await response.json();

let setIndex = data.index;

// show SET
document.getElementById("set").innerText =
setIndex;

// REAL 2D calculation
let result =
setIndex.toString().split(".")[1].slice(0,2);

document.getElementById("twod").innerText =
result;

}catch(e){
console.log("Market closed");
}

}

loadSET();
setInterval(loadSET,5000);
