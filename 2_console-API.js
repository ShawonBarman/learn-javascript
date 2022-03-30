/*
In javascript, the console is an object which provides access to the browser debugging console. We can open a console in web browser by using: Ctrl + Shift + K for windows and Command + Option + K for Mac.
The console object provides us with several different methods, like :

    log()
    error()
    warn()
    clear()
    time() and timeEnd()
    table()
    count()
    group() and groupEnd()
    custom console logs
*/


// console.log() method
console.log('abc');
console.log(1); //the color of this value is blue because this is a number
console.log(true);
console.log(null);
console.log(undefined);
console.log([1, 2, 3, 4]); // array inside log
console.log({a:1, b:2, c:3}); // object inside log
// console.error() method
console.error('This is a simple error');
// console.warn() method
console.warn('This is a warning.');
// console.clear() method
// console.clear();
// console.time() and console.timeEnd() method
console.time('abc');
 let fun1 =  function(){
     console.log('fun1 is running');
 }
 let fun2 = function(){
     console.log('fun2 is running..');
 }
 fun1(); // calling fun1();
 fun2(); // calling fun2();
console.timeEnd('abc');
// console.table() method
console.table({'a':1, 'b':2});
// console.count() method
for(let i=0;i<5;i++){
    console.count(i);
}

// console.group() and console.groupEnd() method
console.group('simple');
console.warn('warning!');
console.error('error here');
console.log('vivi vini vici');
console.groupEnd('simple');
console.log('new section');