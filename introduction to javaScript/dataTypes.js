console.log("Primitive Data Types.")

// seven primitive data types 
// number: represents both integer and floating-point numbers in JavaScript.
// ❖ string: represents textual data in JavaScript and can be enclosed in single
// quotes,double quotes, or backticks. In JavaScript, there are several ways to
// represent strings:
// ➢ Single quotes ('string'): Strings can be enclosed in single quotes.
// ➢ Double quotes ("string"): Strings can also be enclosed in double-quotes.
// ➢ Template literals/backticks (`string`): Template literals were introduced in
// ECMAScript 6 and allowed strings to be enclosed in backticks. They are mostly
// used to represent a string literal that can contain placeholders for variables,
// making it easier to concatenate strings and variables. In addition, the backtick
// notation also allows for multiline strings.
// boolean: represents a logical value, which can be either true or false.
// ❖ null: represents the intentional absence of any object value.
// ❖ undefined: represents a variable that has been declared but has not been assigned
// a value.
// ❖ bigint: represents integers with arbitrary precision. These values usually have ‘n’ at
// the end of the number. For example: let num = 10n; Here, num is of bigint data type
// ❖ symbol: represents a unique value that can be used as a key for object properties.


let num = 1234254353;
let str = "abc";
let bool = true;
let n = null;
let un = undefined;
let bi = 432532453453425234524352345324642524352453425234565643252345335243533426435234623465432n;

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof n);
console.log(typeof un);
console.log(typeof bi);

console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);
