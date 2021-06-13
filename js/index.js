'use strict';
// get element
/**
 * getElementById
 * getElementsByTagName
 * getElementsByClassName
 * getElementsByName
 *
 * querySelector
 * querySelectorAll
 */

const mainPElement = document.getElementById('mainP');
console.dir(mainPElement);

const paragraphElements = document.getElementsByTagName('p');
const [paragraphElement0, paragraphElement1, paragraphElement2] =
  document.getElementsByTagName('p');
console.dir(paragraphElement0);

const myClassElements = document.getElementsByClassName('myClass');
console.dir(myClassElements);

const pElement = document.querySelector('.myClass');
console.dir(pElement);

const myClassElements1 = document.querySelectorAll('.myClass');
console.dir(myClassElements1);
//===========================================================================
// Event Handling
const btnElement = document.querySelector('button');

btnElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler(e) {
  alert('CLICK!!!)))');
}

btnElement.addEventListener('click', e => {
  alert('CLICK!!!)))');
});

function buttonClickHandler(e) {
  alert('CLICK!!!)))');
}
//============================================================

// create element
const newP = document.createElement('p');
const newPPrepend = document.createElement('p');

//============================================================
// append/remove element

// parent.append(child)
// parent.prepend(child)
// child.before(child)
// child.after(child)
// child.remove();
// child.replaceWith();

const articleElement = document.querySelector('article');
newP.append('New paragraph');
articleElement.append(newP);

newPPrepend.append('New prepand paragraph');
// articleElement.prepend(newPPrepend);

const childP = document.querySelector('p');
newPPrepend.append('New prepend paragraph before childs');
childP.before(newPPrepend);

const newAfter = document.createElement('p');
const h2Element = document.querySelector('h2');
newAfter.append('newAfter');
h2Element.after(newAfter);

// parent search
console.dir(mainPElement.closest('article'));
//===========================
// attributes
// element.setAttribute(attrName, attrValue);
//==================================================
// Node => EventTarget
// Children: Node.childNodes
//           Node.firstChild
//           Node.lastChild
// Parent:   Node.parentNode
// Siblings: Node.previousSibling
//           Node.nextSibling
//==================================================
// Element => Node => EventTarget
// Children: Element.children
//           Element.firstElementChild
//           Element.lastElementChild
// Parent:   Element.parentElement
// Siblings: Element.previousElementSibling
//           Element.nextElementSibling
// Element.closest(css)

//==============style====================
// inline
const h1 = document.querySelector('h1');
h1.style.color = '#FFFF00';
// class
const h2 = document.querySelector('h2');
h2.classList.add('myClass');
const main = document.querySelector('main.myClass');
main.classList.remove('myClass');
