function squareNum(num){
    return num**2;
}



let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let num = document.querySelector("#num");
let msgContainer = document.querySelector(".msg-container");

btn.addEventListener("click", function(){
    
    let message = document.createElement(("h3"));
    let newVal = squareNum(num.value);
    message.textContent = newVal;
    msgContainer.appendChild(message);
    

})