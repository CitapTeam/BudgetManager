# First Lesson - Javascript

In this lesson we are going to talk about how to manipulate the DOM with vanilla Javascript and also a little introduction to the module pattern, using javascript.

## DOM

Is the DOM the HTML writen?
No. The DOM or Document Object Model is created by the browser when the page is loaded.

## Manipulating the DOM

### Accesing the DOM Elements

How to get an element when we know the ID?

```
document.getElementById(id);
```

How to get all the child elements that have a class associated?

```
document.getElementsByClassName(names);
```

How to get all HTML elements with a specific tag name?

```
document.getElementsByTagName(name);
```

How to get the first element in the DOM in the specified group of selector?

```
document.querySelector(selectors);
```

How to get a list of the elements in the DOM in the specified group of selector?

```
document.querySelectorAll(selectors);
```

Other HTML accessible Objects
* document.anchors : retrun a list of all the anchors in the document (Deprecated in HTML5)
* document.body : returns the body node in the DOM
* document.documentElement : returns the element in the root element of the DOM
* document.embeds
* document.forms
* document.head
* document.images
* document.links
* document.scripts
* document.title


These ways to access the DOM can be combined, for example:

```
var parent = document.getElementById(id);
var childs = parent.getElementsByTagName("p");
```

This is going to retrieve a list of elements "p" for the parent element.

The innerHTML Property

### Get Children/Parent Nodes

How to get the child nodes of one element?

```
var parent = document.getElementById(id);
var childNodes = parent.childNodes;
```

How to get the parent nodes of one element?

```
var parent = document.getElementById(id);
var childNodes = parent.childNodes;
var parentNode = childNodes.parentNode;
```
### Create New DOM Elements

Create elements
```
var newElement = document.createElement('h1');
```

Create nodes for the new elements
```
var newElementText = document.createTextNode("CITAP Team is the best");
```
Append the node to the new element
```
newElement.appendChild(newElementText);
```

#### Add Elements to the DOM

```javascript
// grab element on page you want to add stuff to
var firstHeading = document.getElementById('firstHeading');

// add both new elements to the page as children to the element we stored in firstHeading.
firstHeading.appendChild(newHeading);
firstHeading.appendChild(newParagraph);

// can also insert before like so

// get parent node of firstHeading
var parent = firstHeading.parentNode;

// insert newHeading before FirstHeading
parent.insertBefore(newHeading, firstHeading);
```

#### Add Elements to the DOM cont.

Suppose you have the following HTML:
```html
<div id="box1">
  <p>Some example text</p>
</div>
<div id="box2">
  <p>Some example text</p>
</div>
```

```javascript
// you can insert another snippet of HTML between #box1 and #box2 
var box2 = document.getElementById("box2");
box2.insertAdjacentHTML('beforebegin', '<div><p>This gets inserted.</p></div>');

// beforebegin - The HTML would be placed immediately before the element, as a sibling.
// afterbegin - The HTML would be placed inside the element, before its first child.
// beforeend - The HTML would be placed inside the element, after its last child.
// afterend - The HTML would be placed immediately after the element, as a sibling.
```

#### Add/Remove/Toggle/Check Classes

```javascript
// grab element on page you want to use
var firstHeading = document.getElementById('firstHeading');

// will remove foo if it is a class of firstHeading
firstHeading.classList.remove("foo");

// will add the class "anotherClass" if one does not already exist
firstHeading.classList.add("anotherclass");

// add or remove multiple classes
firstHeading.classList.add("foo","bar"); 
firstHeading.classList.remove("foo","bar");

// if visible class is set remove it, otherwise add it
firstHeading.classList.toggle("visible");

// will return true if it has class of "foo" or false if it does not
firstHeading.classList.contains("foo");





### References:
* https://developer.mozilla.org
* https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86#accessing-dom-elements
* https://www.w3schools.com/js/js_htmldom_elements.asp
