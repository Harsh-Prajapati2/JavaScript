// part 1


// const user1 = {
//     username : 'sara',
//     age : 12,
// }


// deep copy vs shallow copy

// in this reference of user1 memory location points to user2 so any change in user2 will change memory location value

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username = "Harsh";
// console.log(user1);
// console.log(user2);

// shallow copy
// 1. using spread operator
// const user2 = {...user1};

// console.log(user1);
// console.log(user2);

// user2.username = "Harsh";
// console.log(user1);
// console.log(user2);

// 2.using Object.assign()

// const user2 = Object.assign({},user1);

// console.log(user1);
// console.log(user2);

// user2.username = "Harsh";
// console.log(user1);
// console.log(user2);


// Part 2
//  in shallow copy it will cpoy the outer layer of the object like example

// const user1 = {
//     username : 'sara',
//     age : 12,
//     marks : {
//         maths : 20,
//         english :25,
//     }
// }


// const user2 = Object.assign({},user1);
// console.log(user1);
// console.log(user2);

// user2.username = "Harsh";
// user2.marks.maths = 25;   // it will change both user1 and user2 maths marks to 25
// console.log(user1);
// console.log(user2);


// deep copy

const user1 = {
    username : 'sara',
    age : 12,
    marks : {
        maths : 20,
        english :25,
    },
    getDetails(){
        console.log(this.username);
    }
}

console.log(user1);
// console.log(user2);

const user2 = JSON.parse(JSON.stringify(user1));
// it convert into string and themn json key value pair
// it didn't copy the method(functions) to the new variable
user2.marks.maths = 10;
console.log(user1);
console.log(user2);
