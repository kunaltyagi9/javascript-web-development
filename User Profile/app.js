window.onload = () => {
    document.querySelector('#btnSubmit').addEventListener('click', getData);
}

function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let out = '<h2 class = "mt-3 mb-2">Data of Users</h2>'

        data.forEach(user => {
            out += `
                <ul class = "list-group mb-3">
                    <li class = "list-group-item text-primary">${user.name}</li>
                    <li class = "list-group-item text-secondary">${user.email}</li>
                    <li class = "list-group-item text-info">${user.website}</li>
                </ul>
            `
        });
        document.querySelector('#result').innerHTML = out;
    })
}