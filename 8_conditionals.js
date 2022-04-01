// single if statement
var x = 7;
if (x > 5){
    console.log(x+" is greater than 5");
}

// if-else statement
var age = 23;
if (age > 17){
    console.log("You are not a kid!");
}
else{
    console.log("You are kid!");
}

// if-else-if statement
var yourAge = 2;
if (yourAge > 18 && yourAge < 25){
    console.log("You can drink rasna water.");
}
else if (yourAge >= 25){
    console.log("You can drink beer");
}
else{
    console.log("You can drink just water");
}

// another example
if(role==='gaust'){
    console.log('Gaust Users');
}
else if(role === 'moderator'){
    console.log('Moderator Users');
}
else{
    console.log('Invalid');
}

//switch statement
let role = 'moderator';
switch(role){
    case 'gaust':
        console.log('Gaust Users');
        break;
    case 'moderator':
        console.log('Moderator Users');
        break;
    default:
        console.log('Invalid');
        break;
}