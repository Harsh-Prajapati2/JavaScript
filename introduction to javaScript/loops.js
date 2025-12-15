console.log("Loops :");
console.log();
console.log();

console.log("For Loop :");
// for (initialization; condition ; iteration){ code }

console.log("Print 1 to 10.");
for (let i = 1;i < 11; i++){
    console.log("Iteration :",i);
}
console.log();
console.log();

console.log("While Loop :");

// while (condition){ iteration and code}
let i = 0;
while (i < 5){
    console.log(i);
    i = i + 1;
}


console.log();
console.log();

console.log("Do While Loop:");
// do { code (it will executed at least once) } while(condition)
do {
    console.log("Hello.");
}while(false);

console.log();
console.log();

console.log("Nested Loop:");
//outer loop
for (let i = 0; i < 2; i++){
    // inner loop 
    for (let j = 0; j <= 2; j++){
    console.log(`${i} : ${j}`)
    }
}