function main(){

    const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001"
    }
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: '0101',
      zipCode: "10011"
    }
  };
  
  function getUserDetail(profile, keys) {
    // Implement your function here
       // return keys.reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined), profile);
        return keys.reduce((obj, key) => {
            if(obj && obj[key] !== undefined){
                obj = obj[key];
            }
            return obj;
        }, profile);  
    }
  
  
  console.log(getUserDetail(userProfile, ["address","city"]));
  console.log(getUserDetail(userProfile2, ["name"]));
  // Usage: should return "New York"
  //do not modify the return statement
return getUserDetail;
}
main();