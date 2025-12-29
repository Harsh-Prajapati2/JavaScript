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

function getDetails(id){

    fetch(`https://dummyjson.com/users/${id}`)
    .then((response)=> {
        if (!response.ok) {
            throw new Error(`ID 0 does not exists.`);
        }
        return response.json()
    })
    .then((user) => {
        displayDetails(user,'beforeend');
        return fetch(`https://dummyjson.com/users/${id-1}`);
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error("prev id does not exists.")
        }
        return response.json();
    })
    .then((user)=> displayDetails(user,'afterbegin','other'))
    .catch((error) => console.log(error));


    // console.log(request.id);
}


getDetails(0);