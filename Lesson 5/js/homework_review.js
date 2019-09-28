//  call document<method> only ones

/*const inputText = document.getElementById('input-text');
const setBtn = document.getElementById('set-btn');
const resetBtn = document.getElementById('reset-btn');

console.log("setBtn:", setBtn); // check in console
console.log("resetBtn:", resetBtn); // check in console
console.log("inputText:", inputText); // check in console


setBtn.onclick = function () {
  inputText.value = 'Set value on button click'; // accessing to input value
  setBtn.disabled = true; // accessing to button
  resetBtn.disabled = false; // accessing to button
}

resetBtn.onclick = function () {
  inputText.value = '';  // accessing to input value
  setBtn.disabled = false; // accessing to button
  resetBtn.disabled = true; // accessing to button
}

/* function arguments default parameters */

/*const person = {
  name: 'Bob'
}

const addPrefix = function (value = '', prefix = '') {
  if (!value) return '--';

  return prefix + value
}

const res = addPrefix(person.firstName, 'Mr.'); // accessing with wrong key
const res1 = addPrefix(person.name, 'Mr.'); // correnct values
const res2 = addPrefix(person.name); // missing prefix value
console.log("accessing with wrong key:", res);
console.log("correnct values:", res1);
console.log("missing prefix value:", res2);


/* comparison operators */
/*const num = 5;
const str = "5";

console.log(num == str); // Equal

// Always use strict equal to avoid unexpected behaviour (in some cases it may be an exceptions)
console.log(num === str); // Strict equal
*/
