async function loadSET(){

let res = await fetch(
"https://api.allorigins.win/raw?url=https://www.set.or.th/api/set/index"
);

let data = await res.json();

let setIndex = data.index;

document.getElementById("set").innerText =
setIndex;

let twoD =
setIndex.toString().slice(-2);

document.getElementById("twod").innerText =
twoD;

// save history
db.ref("history").push({
set:setIndex,
twod:twoD,
time:new Date().toLocaleString()
});

}

loadSET();
setInterval(loadSET,15000);