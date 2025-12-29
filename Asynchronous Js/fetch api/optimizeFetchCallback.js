function displayDetails(user,pos,className=' '){

    const divElement = document.getElementById('card-container');
            // console.log(user)
            const card = `<div class="card ${className}">
                <div class="profile-photo">
                    <img src=${user.image} alt="${user.firstname} ${user.lastName}" srcset="">
                </div>
                <div class="profile-info">
                    <h2>${user.firstName}</h2>
                    <h2>${user.lastName}</h2>
                    <p>Email : ${user.email}</p>
                    
                </div>
                </div>`;
            
            divElement.insertAdjacentHTML(pos,card);
}
function getuser(url){
    return fetch(url)
    .then((response)=> {
        if (!response.ok) {
            throw new Error(`ID 0 does not exists.`);
        }
        return response.json()
    })
}
function getDetails(id){

    getuser(`https://dummyjson.com/users/${id}`)
    .then((user) => {
        displayDetails(user,'beforeend');
        return getuser(`https://dummyjson.com/users/${id-1}`);
    })
    .then((user)=> {
        displayDetails(user,'afterbegin','other')
        return getuser(`https://dummyjson.com/users/${id+1}`);
    })
    .then((user)=> {
        displayDetails(user,'beforeend','other')
        // return getuser(`https://dummyjson.com/users/${id+1}`);
    })
    .catch((error) => console.log(error));


    // console.log(request.id);
}


getDetails(3);