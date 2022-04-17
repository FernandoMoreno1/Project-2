async function signupFormHandler(event) {
    event.preventDefault();


    const first_name = document.querySelector('#firstname-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const phone_number = document.querySelector('#phone-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (first_name && last_name && username && email && address && phone_number && password) {
        const response = await fetch('/api/owners', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                username,
                email,
                phone_number,
                address,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);