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





// const userAuth = (function(){
//     let registeredUsers = {}
//     // check credentials function
//     var checkCredentials = (userName,password) =>{
//         for (let user of Object.keys(registeredUsers)){
//             if (user == userName){
//                 return true;
//             }
//         }
//         return false;
//     }
//     //  for register user 
//     const registerUser = function(userName,password){
//         // first check username exist or not
//         if (checkCredentials(userName,password)){
//             console.log("The user is already registered");
//         }else{
//         // if not then store to registeredUsers;
//         registeredUsers[userName] = password;
//         console.log("The user have been added to the registeredUser array");
//         }
//     }
    
//     return {registerUser};
// })();

// userAuth.registerUser("testuser", "password123"); 
// userAuth.registerUser("testuser", "password123");



// let arr = {};
// arr["harsh"] ="Harsh@123";
// arr["john"] = "john@123"
// console.log(arr)
// console.log(Object.keys(arr))

// for (let username of Object.keys(arr)){
//     if (username == "johnsina"){
//         console.log(`Username : ${username} \nPassword : ${arr[username]}`)
//         break
//     }
//     // else{
//     //     console.log(`Username : ${username} not found.`)
//     // }
// }

// let i = 0
// let arr = ['a','b','c','d']
// let n = arr.length
// console.log(n)

// result = []
// while (i < n){
    
//     val = Math.floor(Math.random()*10 )% (arr.length)
//     if (arr[val] in result){

//     }else{
//         result.push(arr[val])
//         i = i + 1
//     }


//     // console.log(Math.floor(Math.random()*10))
// }

// console.log(result)

// i = 0
// result = []
// while (i < -1){
//     val = Math.floor(Math.random()*10  )% (5)
// }

//  random number generator
// i = 0
// result = []
// while (i < 7){

// val = Math.floor(Math.random()*100 )% (7)
// if (result.includes(val)){
//     continue
// }else{
//     result.push(val)
//     i = i + 1
// }
// // console.log(val)
// }
// console.log(result)

// function shuffle(arr) {
//     return function () {
//       //Write your code below
//       result = []
//       i = 0
//       let n = arr.length
//       while (i < n){
//         val = Math.floor(Math.random()*100 )% (n-1)
//         if (result.includes(val)){
//             continue
//         }else{
//             result.push(arr[val])
//             i = i + 1
//         }
//         // console.log(val)
//         }
//         // console.log(result)
//       return result;
//     };
//   }
// const questions = [
//     "Question1",
//     "Question2",
//     "Question3",
//     "Question4",
//     "Question5"
//   ];

// shuffleArray1 = shuffle(questions)
// console.log(shuffleArray1())

// const songs = [
//   { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", year: 2020 },
//   { title: "Shape of You", artist: "Ed Sheeran", album: "Divide", year: 2017 },
//   { title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep, Where Do We Go?", year: 2019 },
//   { title: "Rolling in the Deep", artist: "Adele", album: "21", year: 2010 },
//   { title: "Someone Like You", artist: "Adele", album: "21", year: 2011 },
//   { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", album: "Uptown Special", year: 2014 },
//   { title: "Shallow", artist: "Lady Gaga & Bradley Cooper", album: "A Star Is Born", year: 2018 },
//   { title: "Thinking Out Loud", artist: "Ed Sheeran", album: "X", year: 2014 },
//   { title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", year: 2020 },
//   { title: "Sunflower", artist: "Post Malone & Swae Lee", album: "Spider-Man: Into the Spider-Verse", year: 2018 },
//   { title: "Believer", artist: "Imagine Dragons", album: "Evolve", year: 2017 },
//   { title: "Closer", artist: "The Chainsmokers ft. Halsey", album: "Collage", year: 2016 },
//   { title: "Senorita", artist: "Shawn Mendes & Camila Cabello", album: "Shawn Mendes", year: 2019 },
//   { title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", album: "Vida", year: 2017 },
//   { title: "Havana", artist: "Camila Cabello ft. Young Thug", album: "Camila", year: 2017 },
//   { title: "Old Town Road", artist: "Lil Nas X", album: "7", year: 2019 },
//   { title: "All of Me", artist: "John Legend", album: "Love in the Future", year: 2013 },
//   { title: "Sorry", artist: "Justin Bieber", album: "Purpose", year: 2015 },
//   { title: "Hello", artist: "Adele", album: "25", year: 2015 },
//   { title: "Perfect", artist: "Ed Sheeran", album: "Divide", year: 2017 },
//   { title: "Drivers License", artist: "Olivia Rodrigo", album: "SOUR", year: 2021 },
//   { title: "Happy", artist: "Pharrell Williams", album: "G I R L", year: 2013 },
//   { title: "Bad Habits", artist: "Ed Sheeran", album: "=", year: 2021 },
//   { title: "Stay", artist: "The Kid LAROI & Justin Bieber", album: "F*ck Love 3: Over You", year: 2021 },
//   { title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", year: 2019 },
//   { title: "Shake It Off", artist: "Taylor Swift", album: "1989", year: 2014 },
//   { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", album: "Trolls", year: 2016 },
//   { title: "Take Me to Church", artist: "Hozier", album: "Hozier", year: 2014 },
//   { title: "Rockstar", artist: "DaBaby ft. Roddy Ricch", album: "Blame It on Baby", year: 2020 },
//   { title: "Faded", artist: "Alan Walker", album: "Different World", year: 2015 }
// ];

// // songs.sort((a, b) => {
// //   if (b.year === a.year) {
// //     return a.title.localeCompare(b.title); // Sort alphabetically by title
// //   }
// //   return b.year - a.year; // Sort by year (descending)
// // });

// // console.log(songs);

// // songs.sort((a,b)=>{
// //   if (b.year === a.year){
// //     return a.title.localeCompare(b.title)
// //   }
// //   return b.year - a.year
// // })
// // for (let i = 0;i < 3; i++){
// //   console.log(songs[i])
// // }
// console.log("hello","world")


// console.log("world")


// const ch=()=>{
//   for (let index = 0; index < 5; index++) {
//     for (let inner = 0; immer < array.length; index++) {
//       const element = array[index];
      
//     }
//     console.log(index)
    
//   }
// }


// let a = 10;
// console.log(a);
// var a = 10;


// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 11;
// console.log(a);
// console.log(b);
// console.log(a^b);



// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);



// console.log(2 == 2);
// console.log(2 === 2);
// console.log(2 === "2");
// console.log(2 == "2");

// console.log(new Number(1));
// let a = 123131230;
// // console.log(typeof a.toString());
// console.log(toString(a));

// console.log(a.toExponential());
// console.log(a.toFixed(2));
// console.log(a.toPrecision(2));

// let s = "harsh";
// console.log(s.charAt(2));
// console.log(s.indexOf("h"));
// console.log(s.length);
// console.log(s.slice(1,3));
// console.log(s.split("r"));
// console.log(s.repeat(4));
// console.log(s.includes("sh"));

// let s = "how are you"
// console.log(s.split("").reverse().join(""));
// console.log(s.split(" ").reverse().join(" "));


// expense = []
// arr = ["rent",5000,"20-09-2024"];
// expense.push(arr);
// console.log(expense);
// arr1 = ["bike",60000,"12-08-2024"];
// expense.push(arr1);
// console.log(expense)
// console.log(expense[0][1])
// console.log(expense[1][1])
// let val = 0;
// for(let i=0;i<expense.length;i++){
//     val = val + expense[i][1];
// }
// console.log(val);

// var user_n ;
// console.log(user_n);
// user_n = "harsh";
// console.log(user_n)

console.log("5" + "2" * 3);
console.log([] + {});
var a = 10;
function test() {
  console.log(a);
  var a = 20;
}
test();
function test() {
    console.log(a);
  if (true) {
    var a = 10;
  }
  console.log(a);
}
test();
let x = 3;
switch (x) {
  case 1:
    console.log("A");
    break;
  
  case 3:
    console.log("C");
    default:
    console.log("Default");
}
var result = (function () {
    return
    {
        value: 10
    };
})();
console.log(result);
