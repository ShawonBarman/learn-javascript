// HTML events are "things" that happen to HTML elements.

// An HTML event can be something the browser does, or something a user does.
/*
Here are some examples of HTML events:

    An HTML web page has finished loading
    An HTML input field was changed
    An HTML button was clicked
*/

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// we can add the oneclick="clicked()" in the HTML inside the button keyword. it means when we clicked the button, the clicked() function is active and run this function.
function  clicked(){
    console.log("Button was clicked");
}

// after loaded the HTML document, this function run.
window.onload = function(){
    console.log("Document is loaded");
}

let df = document.getElementsByTagName('div');
df[1].addEventListener('click', function(){
    console.log('Clicked on second container');
})

// df[2].addEventListener('mouseover', function(){
//     console.log('mouse hover on third container');
// })

// df[2].addEventListener('mouseout', function(){
//     console.log('mouse hover out of third container');
// })

df[2].addEventListener('mouseup', function(){
    console.log('mouse up when clicked on third container');
})

df[2].addEventListener('mousedown', function(){
    console.log('mouse down when clicked on third container');
})

df[0].addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>New javascript paragraph</b>"
    console.log('Clicked on first container');
})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
df[2].addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log('mouse up when clicked on third container next part.');
})

df[2].addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>"
    console.log('mouse down when clicked on third container next part.');
})
