let input = document.querySelector("#input");

// declaring a debounce function..

// function debounce(fnc, delay){
//     let timer;





function debounce(fnc, delay) {

    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);

        }, delay);
    }
}

input.addEventListener("input", debounce(function (evt) {
    console.log("Here is a suggestion");


}, 1500))