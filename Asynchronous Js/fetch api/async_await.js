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

async function getDetails(id){
    try{
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if(!response.ok){
            throw new Error(`ID ${id} does not exists.`);
        }
        const userdata = await response.json();
        displayDetails(userdata);
    }catch(err){
        console.log(err);
    }
}


getDetails(0);
