

function getDetails(id){

    const request = fetch(`https://dummyjson.com/users/${id}`).then((response)=>{
        return response.json();
    }).then((user) => 
        {
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
                    <p>Role : admin</p>
                </div>
                </div>`;
            divElement.insertAdjacentHTML('beforeend',card);
        });

    // console.log(request.id);
}

for(let i=1;i<10;i++){
    getDetails(i);
}
