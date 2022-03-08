let alertFunc = function(){
window.alert("This button has been clicked!")
}

let confirmFunc = function(){
let response = window.confirm("Is 'X > Y'?")
        if (response){
        console.log("ok.");
        }else{
        console.log("ok!");
        }
}

let consoleFunc= function(){
window.console.log("Is this any different?") // Nope.
}
let docObject = {
// title: document.title,  // Doesn't work
elementId: document.getElementById,
query: document.querySelector,
queryAll: document.querySelectorAll
};

const para = document.querySelector('p'); //  '.' and '#' work. so does <element>.class & element.id
const paras = document.querySelectorAll('p');
console.log(paras);


let div
