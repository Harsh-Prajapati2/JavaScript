const user = (function(){
    const userData ={
        userName : "Harsh",
        userAge : 20
    };

    function getUsername(){
        console.log(userData.userName);
    }

    function updateAge(age){
        console.log(userData.userAge + age);
    }

    return {getUsername,updateAge}
})()

console.log(user)
user.getUsername()
user.updateAge(5)






const user1 = (function(){

})();