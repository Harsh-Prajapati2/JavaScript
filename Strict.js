"use strict";
// a =10  gives error if try to run in strict mode
let a = 10;
console.log(a);

function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
  return "I'm not strict.";
}
console.log(myNotStrictFunction());
console.log(myStrictFunction())