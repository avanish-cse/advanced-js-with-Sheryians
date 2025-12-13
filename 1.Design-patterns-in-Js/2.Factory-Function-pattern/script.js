// Simple Factory Fucntion

function createBike( name, price, stock) {
    stock = stock;

    return {
        name,
        price,

        checkStock() {
            console.log(`there are ${stock} pieces in the stock`);

        },

        setStock(val) {
            stock += val;
            console.log(`now thw new stock is: ${stock} pieces`);

        },

        buy(val) {
            if (val <= stock) {
                stock -= val;
                console.log(`you ordered ${val} pieces`);

            } else {
                console.error(`not enough stock !!!  Toatl pieces in stock: ${stock}`);
            }
        }
    }

}


let platina = createBike("Bajaj Platina", 96000, 15);
platina.checkStock()



// now a good a better Factory Function program


