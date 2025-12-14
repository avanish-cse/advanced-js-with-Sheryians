let input = document.querySelector("#input");

// declaring a debounce function..

// function debounce(fnc, delay){
//     let timer;
//     return function(...args) {
//         clearTimeout(timer);
//         timer = setTimeout(function(){

//         },delay);
//     }
// }




function debounce(fnc, delay) {
    console.log("debounce fn chal gya");
    return function () {
        console.log("ab dusra wala chal rha hai");

    }
}

input.addEventListener("input", debounce( function() {}, 2000))