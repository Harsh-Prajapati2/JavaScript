/** Problem statement
Suppose you are working on a contact application that stores contact details in a list of objects. 
Each contact object has the name and company information of a contact, as shown below:

const contacts = [
{ name: "Alice", company: "ABC Inc." },
{ name: "Bob", company: "XYZ Corp." },
{ name: "Charlie", company: "ABC Inc." }
]



Objectives:
Create a function with name mapContactsToCompanies that accepts an array of contacts and 
returns an object with the company names as the keys and an array of the corresponding 
contact names as the values.
Use the reduce method to get the expected output.
Ensure that each company name in the output object maps to an array containing all the 
contact names associated with that company.


Input:
const contacts = [
{ name: "Alice", company: "ABC Inc." },
{ name: "Bob", company: "XYZ Corp." },
{ name: "Charlie", company: "ABC Inc." }
]
mapContactsToCompanies(contacts)


Output:

{
"ABC Inc.": [
"Alice",
"Charlie"
],
"XYZ Corp.": [
"Bob"
]
}


Hint:
Here's a basic example of how the reduce method works with dummy data:

const exampleArray = [1, 2, 3, 4]; 
const result = exampleArray.reduce(function(accumulator, currentValue) {
accumulator.push(currentValue * 2);
return accumulator;
}, {});
In the above example, the result will be [2, 4, 6, 8]. */

const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." }
];

function mapContactsToCompanies(contacts) {
  return contacts.reduce((accumulator, contact) => {
    // Check if the company already exists as a key in the accumulator
    if (!accumulator[contact.company]) {
      // If the company doesn't exist, create a new array for it
      accumulator[contact.company] = [];
    }
    // Add the contact name to the corresponding company's array
    accumulator[contact.company].push(contact.name);
    return accumulator;
  }, {}); // Initial value is an empty object
}

console.log(mapContactsToCompanies(contacts));
