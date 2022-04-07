//The window object allows execution of code at specified time intervals. These time intervals are called timing events.

/*
The two key methods to use with JavaScript are:

    -> setTimeout(function, milliseconds) - Executes a function, after waiting a specified number of milliseconds.

    -> setInterval(function, milliseconds) - Same as setTimeout(), but repeats the execution of the function continuously.
*/

// setTimeout() Method
myFunction = () =>{
    console.log("2 second is down");
}
setTimeout(myFunction, 2000);

// setInterval() Method
myFunction = () =>{
    console.log("2 second is down. now repeat again");
}
id = setInterval(myFunction, 2000);
// The clearInterval() method stops the executions of the function specified in the setInterval() method.
// clearInterval(id); // when you want to stop the timeinterval then just call this function.