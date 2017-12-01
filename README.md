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



### References:
* https://developer.mozilla.org
* https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86#accessing-dom-elements
* https://www.w3schools.com/js/js_htmldom_elements.asp
