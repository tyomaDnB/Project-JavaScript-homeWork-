"use strict";

const lines = 6;
let result = '';

for (let i = 1; i <= lines; i++) {

    for (let j = i; j < lines; j++) {

        result += " ";
    }

    for (let k = 2; k < 2 * i + 1; k++) {
        
        result += "*";
    }

    result += '\n';
}


console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {

//     for (let j = 0; j < lines - i; j++) {

//         result += " ";
//     }

//     for (let k = 0; k < 2 * i + 1; k++) {
        
//         result += "*";
//     }

//     result += '\n';
// }


// console.log(result);
