
// Remember that methods are actions we can perform. JavaScript provides a number of string methods.
// We call, or use, these methods by appending an instance with:
//     1. a period (the dot operator)
//     2. the name of the method
//     3. opening and closing parentheses
// Does that syntax look a little familiar? When we use console.log() we’re calling the .log() method on the console object. Let’s see console.log() and some real string methods in action!

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true


// Let’s look at each of the lines above:

//     (1) On the first line, the .toUpperCase() method is called on the string instance 'hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.
//     (2) On the second line, the .startsWith() method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.


// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//array methods
myArr = ["Shawon", "Barman", 43, null, 101];
console.log(myArr);
console.log(myArr.length);  //print the array length size number
myArr.pop(); //remove last element
console.log(myArr);
myArr.push("Ovi"); //add after last element in array
console.log(myArr);
myArr.shift();//remove first element
console.log(myArr);
myArr.unshift("SH");//add before first element in array
console.log(myArr);
console.log(myArr.toString());
console.log(myArr);
arr = [4, 7, 3, 2, 6, 9];
arr.sort(); //by default first convert every value of array in string and then sort
console.log(arr);


// string method in javascript
let myLovelyString = "Shawon is a good boy!";
console.log(myLovelyString.length) //total length of string
console.log(myLovelyString.indexOf("good")) //return the index number
console.log(myLovelyString.lastIndexOf("a"))

console.log(myLovelyString.slice(0, 5))
console.log(myLovelyString.slice(7, 11))

let newLovlyString = myLovelyString.replace("Shawon", "Ovi")
console.log(newLovlyString)
console.log(myLovelyString)


// DOM manipulation