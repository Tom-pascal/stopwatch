let timeDisplay = document.getElementById("display");
let resetbtn = document.getElementById("btn3");

let isrunning = false ;

let starttime ;
let elapsedtime = 0;


let  id ;

let start= ()=>{

//starttime = Date.now
starttime = Date.now()- elapsedtime ;
id = setInterval(update,1);
console.log(starttime);


}
let stop = ()=>{

clearInterval(id);




}
let reset =()=>{
elapsedtime = 0 ;
timeDisplay.textContent = "00:00:00:00";

}
let update=()=>{

elapsedtime = Date.now() - starttime;

let hours =Math.floor( elapsedtime /(1000 * 60 * 60 ));
let mins = Math.floor(elapsedtime /(1000 * 60 )%60)
let secs = Math.floor(elapsedtime/(1000 )%60)
let  ms = Math.floor(elapsedtime % 100)

hours = String(hours).padStart(2,0);
mins = String(mins).padStart(2,0);
secs = String(secs).padStart(2,0);
ms = String(ms).padStart(2,0);



timeDisplay.textContent = `${hours}:${mins}:${secs}:${ms}`;


}

