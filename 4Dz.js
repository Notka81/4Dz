'use strict';

let text = document.querySelector('p');
//console.log(text.textContent.replace(/\'/g, '\"'));

let regexp = /\B'/g;
console.log(text.textContent.replace(regexp, '\"'));