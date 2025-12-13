// Simple Factory Fucntion

function createBike(name, price, stock) {
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
// platina.checkStock()



// now a good a better Factory Function program



function createVehicle(type, name, price, stock) {
    stock = stock;
    if (type === "bike") {

        return {

            name,
            price,
            vehicleType() {
                console.log("bike");

            },

            checkStock() {
                console.log(`there are ${stock} ${name}s in the stock`);

            },

            setStock(val) {
                stock += val;
                console.log(`now thw new stock is: ${stock}s`);

            },

            buy(val) {
                if (val <= stock) {
                    stock -= val;
                    console.log(`you ordered ${val} ${name}s - now there are Toatl ${stock} ${name}s in the stock `);

                } else {
                    console.error(`not enough stock !!!  Toatl ${name}s in stock: ${stock}`);
                }
            }
        }
    }

    if (type === "car") {
        return {
            name,
            price,

            vehicleType() {
                console.log("Car");

            },

            checkStock() {
                console.log(`there are ${stock} ${name}s in the stock`);

            },

            setStock(val) {
                stock += val;
                console.log(`now thw new stock is: ${stock} ${name}s`);

            },

            buy(val) {
                if (val <= stock) {
                    stock -= val;
                    console.log(`you ordered ${val} ${name}s - now there are Toatl ${stock} ${name}s in the stock `);

                } else {
                    console.error(`not enough stock !!!  Toatl ${name}s in stock: ${stock}`);
                }
            }
        }
    }
}


let gWagonR = createVehicle("car", "G WagonR", 500000, 12);
console.log(gWagonR.checkStock());


let Pulsur = createVehicle("bike", "Bajaj Pulsur", 175000, 21);