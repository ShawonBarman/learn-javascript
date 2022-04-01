var arr = [1, 2, 3, 4, 5];
console.log(arr);

//for loop
console.log("for loop demo:");
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//for each loop
console.log("for each loop demo:");
arr.forEach(function(element){
    console.log(element);
})

// for-in loop
console.log('for-in loop demo:');
const person = {
    name: 'Shawon',
    id: 18201043,
    cgpa: 3.88
};
for(let key in person){
    console.log(key,': ',person[key]);
}

let colors = ['red','blue','green'];
for(let index in colors){
    console.log(index,':',colors[index]);
}
// for-of loop
console.log('for-of loop demo:');
for(let color of colors){
    console.log(color);
}

//while loop
console.log("while loop demo:");
let j = 0;  //good practice to use let keyword
while (j < arr.length){
    console.log(arr[j]);
    j += 1;
}

//do while loop
console.log("do while loop demo:");
let x = 0;
do{
    console.log(arr[x]);
    x += 1;
}while(x < arr.length)