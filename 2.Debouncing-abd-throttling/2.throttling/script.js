let input = document.querySelector("#input");

function throttle(fnc, interval) {
    lastTimestamp = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTimestamp >= interval) {
            lastTimestamp = now
            fnc(...args);
        };
    };

};

input.addEventListener("input", throttle(() => {
    console.log("Arey rukk ja mere Bhaiii");

}, 1200));


