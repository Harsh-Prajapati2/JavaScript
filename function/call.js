function greet(user1,user2) {
    console.log(this.name + user1 + user2);
}

const user = { name: "Harsh" };
const user1 = { name: "John" };
const user2 = { name: "Alice" };


greet.call(user," hellp",user2.name);
