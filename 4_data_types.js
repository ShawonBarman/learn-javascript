/*
At a very high level, there are two types of data types in javascript:
    1. Primitive data type: undefined, null, number, string, boolean, symbol
    2. Reference data type: Arrays and Objects
*/

// numbers
var num1 = 43;
console.log(num1); //integer
var num2 = 12.4343;
console.log(num2); //float

// booleans
var a = true;
// console.log(a);
var b = false;
// console.log(b);
console.log(a, b);

// string
var str1 = "This is a string";
console.log(str1); //string

// undefined
var und1 = undefined;
console.log(und1); //the value of this variable is undefined.
var und2;
console.log(und2); //the value of this variable is also undefined.

// null
var a = null;
console.log(a);

// objects
var ages = {
    shawon: 22,
    yeasin: 20,
    nayeem: 21
};
console.log(ages);

// arrays
var arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
var another_arr = [12, 15, "Shawon", 23, "Yeasin"];
console.log(another_arr);

// Reference types:object
let person = {
    say : 'shawon',
    id : 18201043,
    gpa : 3.85
};
console.log(person);
// Dot notation
person.say = 'John';
console.log('After changing the say value in person object :');
console.log(person);
// Bracket notation
person['say'] = 'Ovi';
console.log('After changing the say value in person object :');
console.log(person);