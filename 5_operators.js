// Arithmetic operators
console.log("Arithmetic operators");
var a = 25;
var b = 13;
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);
console.log(11 % 3); // Prints 2

var x = 10;
console.log("Now the value of x is : "+ x++);
console.log("Now the value of x is : "+x);
console.log("Now the value of x is : "+ ++x);
console.log("Now the value of x is : "+ --x);
console.log("Now the value of x is : "+ x--);
console.log("Now the value of x is : "+x);

// Assignment Operators
console.log("Assignment operators:");
var c = b;
console.log(c);
c += 5;
console.log(c);
c -= 2;
console.log(c);
c *= 3;
console.log(c);
c /= 5;
console.log(c);

// comparison operators
console.log("comparison operators:");
var x = 34;
var y = 37;
console.log(x==y);
console.log(x!=y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

// Logical operators
console.log("Logical operators:");
// logical AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// logical OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
// logical NOT
console.log(!true);
console.log(!false);

// Equality operators
console.log("Equality operators test :");
//Strict Equality
console.log(1 === 1);
console.log('1' === 1);
//Lose Equality
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Ternary operators
console.log("Ternary operators test :");
//If a customers has more than 100 points
//They are a 'gold' customers, otherwise
//They are a 'solver' customer
let points = 120;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Bitwise operators
console.log("Bitwise operators test :");
// 1 = 00000001
// 2 = 00000010
console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

const readPermission = 4;
const writePermission = 2;
const excutePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);
let message = (myPermission & readPermission)? 'yes' : 'No';
console.log(message);