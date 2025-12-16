const btn = document.querySelector("#btn");

btn.addEventListener("click", async function () {
    
    let heavy = await import("./heavy.js");
    heavy.printHeavy()
})