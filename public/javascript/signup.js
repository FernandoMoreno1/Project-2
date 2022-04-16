async function signupFormHandler(event) {
    event.preventDefault();


    const name = document.querySelector('#name-signup').value.trim();
    const lastName = document.querySelector('#lastname-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && lastName && username && email && address && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                name,
                lastName,
                username,
                email,
                address,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);