// simple module pattern

let Bank = (function () {
    let balance = 15000;

    function checkBalance() {
        return balance;

    }

    function setBalance(amount) {
        return balance = amount;
    }


    function withdraw(amount) {
        amount <= balance ? balance -= amount : console.log("not sufficient balance");
        console.log("balance", balance);


    }

    return {
        checkBalance,
        setBalance,
        withdraw
    }

}
)();


// ----------------------------------------------------------------------------------------------------
// -----------------------  Revealing Module Pattern --------------------------

let newBank = (function () {
    let balance = 15000;

    function checkBalance() {
        return balance;

    }

    function setBalance(amount) {
        return balance = amount;
    }


    function withdraw(amount) {
        amount <= balance ? balance -= amount : console.log("not sufficient balance");
        console.log("balance", balance);


    }

    return {
        check: checkBalance,
        set: setBalance,
        cash: withdraw
    }

}
)();