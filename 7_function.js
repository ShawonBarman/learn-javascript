//A JavaScript function is a block of code designed to perform a particular task.

function avg(a, b){
    return (a+b)/2;
}

c1 = avg(4, 6);
c2 = avg(10, 15);
console.log(c1, c2);

/* Write a function that takes two numbers and return the maximum of two number */
function maximumNumber(x, y){
    return (x>y)? x : y;
}
let max = maximumNumber(1001,1010);
console.log('Maximum number is :',max);

// another example
/* if the input is Divisible by 3 then say 'Fizz'
   if the input is Divisible by 5 then say 'Buzz'
   Divisible by both 3 and 5 then say 'FizzBuzz'
   Not Divisible by 3 or 5 then say 'same input'
   if the input is not a number then say 'Not a number'
*/
function test(input){
    if(typeof input !== 'number'){
        return 'Not a Number';
    }
    if(input%3 === 0 && input%5 !== 0){
        return 'Fizz';
    }
    if(input%5 === 0 && input%3 !== 0){
        return 'Buzz';
    }
    if(input%3 === 0 && input%5 === 0){
        return 'FIzzBuzz';
    }
    if(input%3 !== 0 || input&5 !== 0){
        return 'Not Divisible';
    }
}
const output = test(7);
console.log(output);

// another way to create any function which is arrow function
sum = (a, b) => {
    return a+b;
}