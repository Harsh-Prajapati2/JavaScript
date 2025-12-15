/* You are required to build 
a user authentication system for a web application Using the IIFE.

Requirements

1. Create an empty array called registeredUsers to store user data.
2. Create an IIFE that returns an object with two functions:
registerUser: registerUser(username, password):
(i) It should take two parameters "username" and "password" 
    and add them to the registeredUsers array. 
(ii) It should call the checkCredentials function to determine 
    if a user with the same credentials already exists in the registeredUsers array.

(iii) If the user is already registered then return `The user is already registered` 
    otherwise push the user object to the registeredUsers array and 
    return ` The user have been added to the registeredUser array`. 
    checkCredentials: checkCredentials(username, password): 
(i)  It should take two arguments, "username" and "password".
(ii) It should check if a user with the given credentials exists in the registeredUsers 
    array. It should return false if the user is not present otherwise true.
(iii) The checkCredentials function is NOT exposed outside the IIFE, 
    so it can only be called from within the IIFE (e.g., inside registerUser).


Input:

userAuth.registerUser('testuser', 'password123');
userAuth.registerUser('testuser','password123');

Output:

The user have been added to the registeredUser array
The user is already registered  */


// let registeredUsers = {}

// const userAuth = (function(){

//     //  for register user 
//     const registerUser = function(userName,password){
        
//         // check credentials function
//         var checkCredentials = (userName,password) =>{
//             for (let user of Object.keys(registeredUsers)){
//                 if (user == userName){
//                     return true
//                 }
//             }
//             return false
//         }

//         // first check username exist or not
//         if (checkCredentials(userName,password)){
//             console.log("The user is already registered")
//         }else{
//         // if not then store to registeredUsers
//         registeredUsers[userName] = password
//         console.log("The user have been added to the registeredUser array")
//         }
//     }
    
//     return {registerUser}
// })()

// userAuth.registerUser("Harsh","Harsh@1234")
// userAuth.registerUser("Harsh","Harsh@1234")





const userAuth = (function(){
    let registeredUsers = {}
    // check credentials function
    var checkCredentials = (userName,password) =>{
        for (let user of Object.keys(registeredUsers)){
            if (user == userName){
                return true;
            }
        }
        return false;
    }
    //  for register user 
    const registerUser = function(userName,password){
        // first check username exist or not
        if (checkCredentials(userName,password)){
            console.log("The user is already registered");
        }else{
        // if not then store to registeredUsers;
        registeredUsers[userName] = password;
        console.log("The user have been added to the registeredUser array");
        }
    }
    
    return {registerUser};
})();

userAuth.registerUser("testuser", "password123"); 
userAuth.registerUser("testuser", "password123");