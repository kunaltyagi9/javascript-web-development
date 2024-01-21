window.onload = () => {
    const searchBox = document.querySelector('#search');
    
    searchBox.addEventListener('focusout', () => {
        formSubmit();
    })

    getUser("kunaltyagi9");
}

const formSubmit = () => {
    const searchBox = document.querySelector('#search');
    if (searchBox.value != "") {
        getUser(searchBox.value);
        searchBox.value = "";
    }
    return false;
}

const getUser = async (username) => {
    const API_URL = "https://api.github.com/users";
    const main = document.querySelector('#main');

    const response = await fetch(`${API_URL}/${username}`);
    const data = await response.json();

    const card = `
        <div class="card">
            <div>
                <img class="avatar" src=${data.avatar_url} alt="dp">
            </div>
            <div class="user">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul>
                    <li>${data.following}<strong>following</strong></li>
                    <li>${data.followers}<strong>followers</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `

    main.innerHTML = card;
    getRepos(API_URL, username);
}

const getRepos = async (API_URL, username) => {
    const repos = document.querySelector('#repos');

    const response = await fetch(`${API_URL}/${username}/repos`);
    const data = await response.json();

    data.forEach(repo => {
        const element = document.createElement('a');
        element.classList.add('repo');
        element.href=repo.html_url;
        element.innerText = repo.name;
        element.target = "_blank";
        repos.appendChild(element);
    })
}