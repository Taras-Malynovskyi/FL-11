let a = Number(prompt(`Input first side of triangle`, ``));
let b = Number(prompt(`Input second side of triangle`, ``));
let c = Number(prompt(`Input third side of triangle`, ``));
if (a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle doesn’t exist');
}else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c && a === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
}else {
    console.log('Triangle doesn’t exist');
}