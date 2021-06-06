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

//============================================================
// append element

//===========================
