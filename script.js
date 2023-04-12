console.log('Hola Mundo');

window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const number = document.querySelector('#number').value;
        const message = document.querySelector('#message').value;

        if (name !== '' && email !== '' && number !== '' && message !== '') {
            // ok
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-number').innerHTML = number;
            document.querySelector('#user-message').innerHTML = message;

            document.querySelector('#exito').classList.add('show-exito');
            document.querySelector('#error').classList.remove('show-error');
        } else {
            // error
            document.querySelector('#error').classList.add('show-error');
            document.querySelector('#exito').classList.remove('show-exito');
        }
    });

    document.querySelector('#get-user')?.addEventListener('click', getUser);
});

function getUser() {
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const userData = response.results[0].name;
            document.querySelector('#user-name').innerHTML = `${userData.title}. ${userData.first} ${userData.last}`;

            document.getElementById('#user-img').src = `${userData.picture}`;
        })
        .catch((error) => {
            document.querySelector('#error-api').classList.add('show-error-api');
            console.log(error);
        });
}