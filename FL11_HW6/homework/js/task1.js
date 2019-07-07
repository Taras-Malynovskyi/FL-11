let a1 = parseFloat(prompt('Input point A x', ''));
let a2 = parseFloat(prompt('Input point A y', ''));
let b1 = parseFloat(prompt('Input point B x', ''));
let b2 = parseFloat(prompt('Input point B y', ''));
let c1 = parseFloat(prompt('Input point C x', ''));
let c2 = parseFloat(prompt('Input point C y', ''));
const divHalf = 2;
let correct = isNaN(a1) && isNaN(a2) && isNaN(b1) && isNaN(b2) && isNaN(c1) && isNaN(c2);
if (correct) {
    console.log(false);
} else if ((a1 + b1) / divHalf === c1 && (a2 + b2) / divHalf === c2) {
    console.log(true);
} else {
    console.log(false);
}