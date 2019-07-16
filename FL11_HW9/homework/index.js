//0
function getNumbers(str) {
    let numstr = [];
    let arr = str.split('');
    for (let index in arr) {
        if (parseInt(arr[index])) {
            numstr.push(parseInt(arr[index]));
        }
    }
    return numstr;
}
console.log(getNumbers(`n1um3ber95`));

//1 
function findTypes() {
    let obj = {};
    let type;
    for (let i = 0; i < arguments.length; i++) {
        type = typeof arguments[i];
        if (type in obj) {
            obj[type] += 1;
        } else {
            obj[type] = 1;
        }
    }
    return obj;
}

console.log(findTypes(null, `hello`, `hello`, `hello`));

//2 
let taskArr = [1, 0, 1];
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
executeforEach(taskArr, function (el) {
    console.log(el)
});

//3
function mapArray(arr, func) {
    let newarr = [];
    executeforEach(arr, function (el) {
        newarr.push(func(el))
    })
    return newarr;
}
console.log(mapArray(taskArr, function (el) {
    return el + 1;
}))

//4
function filterArray(arr, func) {
    let newarr = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            newarr.push(el);
        }
    })
    return newarr;
}
console.log(filterArray(taskArr, function (el) {
    return el > 0;
}))

//5
function showFormattedDate(formatDate) {
    let mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Date: ${mon[formatDate.getMonth()]} ${formatDate.getDate()} ${formatDate.getFullYear()}`;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

//6
function canConvertToDate(d) {
    return !!Date.parse(d);
}
console.log(canConvertToDate(`2016-13-18T00:00:00`));
console.log(canConvertToDate(`2016-03-18T00:00:00`));

//7
function daysBetween(date1, date2) {
    let seconds = 1000;
    let minutes = 3600;
    let hours = 24;
    return Math.abs(Math.round((date1 - date2) / (seconds * minutes * hours)));
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

//8
let array = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1995-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(data) {
    let thisDay = new Date();
    let days = 365;
    let age = 18;
    return filterArray(data, function (i) {
        let date = new Date(i['birthday']);
        return Math.round(daysBetween(thisDay, date) / days) > age;
    }).length;
}
console.log(getAmountOfAdultPeople(array));

//9
function keys(object) {
    let keysArr = [];
    for (let index in object) {
        if (object.hasOwnProperty(index)) {
            keysArr.push(index)
        }
    }
    return keysArr;
}
console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

//10
function values(object) {
    let valuesArr = [];
    for (let index in object) {
        if (object.hasOwnProperty(index)) {
            valuesArr.push(object[index])
        }
    }
    return valuesArr;
}
console.log(values({ keyOne: 1, keyTwo: 2, keyThree: 3 }));




