function displayDetails(user){
    const divElement = document.getElementById('card-container');
            console.log(user)
            const card = `<div class="card">
                <div class="profile-photo">
                    <img src=${user.image} alt="${user.firstname} ${user.lastName}" srcset="">
                </div>
                <div class="profile-info">
                    <h2>${user.firstName}</h2>
                    <h2>${user.lastName}</h2>
                    <p>Email : ${user.email}</p>
                    
                </div>
                </div>`;
            divElement.insertAdjacentHTML('beforeend',card);
}

function getDetails(id){

    fetch(`https://dummyjson.com/uses/${id}`)
    .then((response)=> {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json()})
    .then((user) => displayDetails(user))
    .catch((error) => 
        {
            console.log(error);
        });

    // console.log(request.id);
}

for(let i=1;i<2;i++){
    getDetails(i);
}
