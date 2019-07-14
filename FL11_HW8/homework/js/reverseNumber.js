
function reverseNumber(num) {
    let number, z;
    if (num >= 0) {
        number = num;
        z = 1;
    } else {
        number = num * -1;
        z = -1;
    }
    let reverse = 0;
    for (; number; number = Math.floor(number / 10)) {
        reverse *= 10;
        reverse += number % 10;
    }
    return reverse * z;
}
console.log(reverseNumber(-9201));


