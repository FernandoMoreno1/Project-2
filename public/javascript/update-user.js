async function updateFormHandler(event) {
    event.preventDefault();

    const address = document.querySelector('#address-update').value.trim();
    const phone_number = document.querySelector('#phone-update').value.trim();

    if (address && phone_number) {
        const response = await fetch('/api/users', {
            method: 'put',
            body: JSON.stringify({
                phone_number,
                address
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

document.querySelector('.user-update-form').addEventListener('submit', updateFormHandler);