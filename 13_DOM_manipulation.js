// DOM = Document Object Model (DOM)
// When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the Document object.

// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// When a web page is loaded, the browser creates a Document Object Model of the page

/*
With the object model, JavaScript gets all the power it needs to create dynamic HTML:
    JavaScript can change all the HTML elements in the page
    JavaScript can change all the HTML attributes in the page
    JavaScript can change all the CSS styles in the page
    JavaScript can remove existing HTML elements and attributes
    JavaScript can add new HTML elements and attributes
    JavaScript can react to all existing HTML events in the page
    JavaScript can create new HTML events in the page
*/

/*
The DOM defines a standard for accessing documents:

"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
*/

/*
The W3C DOM standard is separated into 3 different parts:
    Core DOM - standard model for all document types
    XML DOM - standard model for XML documents
    HTML DOM - standard model for HTML documents
*/

/*
The HTML DOM is a standard object model and programming interface for HTML. It defines:

    The HTML elements as objects
    The properties of all HTML elements
    The methods to access all HTML elements
    The events for all HTML elements

The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

HTML DOM methods are actions you can perform (on HTML Elements).

HTML DOM properties are values (of HTML Elements) that you can set or change.
*/

console.log(document.location);
console.log(document.title);
console.log(document.URL);
console.log(document.scripts);
console.log(document.links);
console.log(document.forms);
console.log(document.images);
console.log(document.domain);

// DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

elemClass[0].style.background = "yellow";

elemClass[2].classList.add('bg-primary');
// elemClass[2].classList.remove('bg-primary');

elemClass[2].classList.add('text-success');
// elemClass[2].classList.remove('text-success');

console.log(elemClass[2].innerHTML);
console.log(elemClass[2].innerText);

document.getElementById('click').style.border = '2px solid blue';

// let df = document.getElementsByTagName('h2');
let df = document.getElementsByTagName('div');
console.log(df);

createdElement = document.createElement('p');
createdElement.innerHTML = 'This pera created by javascript';
df[0].appendChild(createdElement);

createdElement2 = document.createElement('p');
createdElement2.innerHTML = 'This pera created by javascript';
df[1].appendChild(createdElement2);

createdElement3 = document.createElement('b');
createdElement3.innerHTML = 'This bold created by javascript';
df[1].replaceChild(createdElement3, createdElement2);

// removeChild(element)   --->   removes an element

// selecting using query
sel = document.querySelector('.container');
console.log(sel);

sel2 = document.querySelectorAll('.container');
console.log(sel2);