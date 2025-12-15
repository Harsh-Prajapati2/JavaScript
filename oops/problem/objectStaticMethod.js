// Problem statement
// You are working on a project that involves managing user profiles. 
// Each user profile is represented as an object with properties such as name, age, and email.

// Objective:
// Your task is to implement the following functionality:
// 1. updateProfile function: This function should take two parameters: user 
// (an object representing the user profile) and updates (an object containing the properties to update in the user profile). 
// The function should use the Object.assign method to update the user profile with the properties from the updates object. 
// Ensure that the original "user" object remains unchanged during the update process.
// Return the updated user object.
// 2. freezeProfile function: This function should take one parameter: user (an object representing the user profile). 
// The function should use the Object.freeze method to make the user profile object immutable, preventing any further modifications.
// Return the same frozen user object.
// Implement the updateProfile and freezeProfile functions to achieve this functionality.


// Hint:
// Learn more about the Object.assign method using the link:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// Learn more about the Object.freeze method using the link:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

// Creates a new updated object without mutating the original
function updateProfile(user, updates) {
    const newUser = Object.assign({}, user, updates);
    return newUser;
}

// Freezes the object to make it immutable
function freezeProfile(user) {
    return Object.freeze(user);
}

// Test users
const harsh = new User("Harsh", 20, "harshprajapati020105");
const john = new User("John", 25, "John123");

// Update harsh's profile without mutating the original
const updatedHarsh = updateProfile(harsh, { age: 30 });

// Freeze John's profile
const frozenJohn = freezeProfile(john);

// Attempt to update frozen profile (will not work)
const attemptedUpdateJohn = updateProfile(john, { age: 35 });

// Output
console.log("Original Harsh:", harsh);                 // Original
console.log("Updated Harsh:", updatedHarsh);           // New updated object
console.log("Frozen John:", frozenJohn);               // Should be unchanged
console.log("Attempted Update on Frozen John:", attemptedUpdateJohn); // New object, but based on frozenJohn

