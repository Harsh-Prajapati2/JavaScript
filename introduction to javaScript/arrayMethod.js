console.log("Array Methods :")
console.log();
// push() method

var state = ["Mumbai","Delhi","Kolkata","Chennai"]
state.push("Lucknow","Bangalore")
console.log(state)

//pop() method
state.pop()
console.log(state)
console.log(state.pop())
console.log(state)


// sort() method
number = [23,54,32,12,98,23]
number.sort();
console.log(number)


//  indexOf() method
state = ["Mumbai","Delhi","Kolkata","Chennai"]
index = state.indexOf("Kolkata")
console.log(index)
console.log(state.indexOf("Gujarat"))

// slice() method
const string = "Hello how are you."
console.log(string.slice(7))
console.log(string.slice(-7))


// splice() method
//  .splice(start,deletecount,item1,item2,item3)
// item1 .. itemN will be added to array

number = [1,2,3,4,5]
ans = number.splice(1,2,12,98,76)
console.log(ans)
console.log(number)


// concat() method

arr1 = [1,2,3,4]
arr2 = [5,6,7]
arr3 = arr1.concat(arr2)
console.log(arr3)
console.log(arr1)   
console.log(arr2)



// iterating over array
//  using for loop
console.log("Using For Loop:")
number = [1,2,3,4,5,6,7,8]
for (let i =0;i<number.length;i++){
    console.log(number[i])
}

//  using for of loop
console.log("Using For...of Loop:")
for (const num of number){
    console.log(num)
}

//  using for...in loop
console.log("Using for...in loop:")
fruits = ["banana","apple","strawberry","mango"]
for (const index in fruits){
    console.log(index)
    console.log(fruits[index])
}

const student = {
    name: "Alice",
    age: 22,
    course: "Computer Science"
};

for (const key in student) {
    // console.log(`${key}: ${student[key]}`);
    console.log(key);
}


// break and continue
console.log("Break and Continue :")
for (let i = 0;i<10;i++){
    if (i==3){
        console.log("Before Continue.")
        if(i==3)continue
        console.log("after continue")
    }
    if (i == 5){
        break
    }
    console.log(i)
}