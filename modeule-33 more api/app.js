const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
    .then(data=> displayUser(data.results))
}


const displayUser = users => {
    const userContainer = document.getElementById('random');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>user:</h3>
        <p>user info:</p>
        <p>email:${user.email}</p>
        
        `;
        userContainer.appendChild(userDiv);
    }
}

loadUser();