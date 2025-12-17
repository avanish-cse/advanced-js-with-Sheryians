//  Js inbuilt map function

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((enrty) => enrty * 2);
console.log(arr2);

//  Let's create our custom map function

const doKaTable = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function myMapFn(array, callback) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], i, arr));
    };
    return newArr;

}


let fourKaTable = myMapFn(doKaTable, (Element)=> {
    return Element*2
})
console.log(fourKaTable);
