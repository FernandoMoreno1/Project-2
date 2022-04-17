async function newRestaurantFormHandler(event) {
    event.preventDefault();


    const name = document.querySelector('#restaurant-name').value.trim();
    const address = document.querySelector('#restaurant-address').value.trim();
    const phone_number = document.querySelector('#restaurant-phone_number').value.trim();
    const open_at = document.querySelector('#open_at').value.trim();
    const close_at = document.querySelector('#close_at').value.trim();
    const owner_id = document.querySelector('.new-restaurant-form').id.slice(5);

    if (name && address && phone_number && open_at && close_at) {
        const response = await fetch('/api/restaurants', {
            method: 'post',
            body: JSON.stringify({
                name,
                address,
                phone_number,
                open_at,
                close_at,
                owner_id
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

document.querySelector('.new-restaurant-form').addEventListener('submit', newRestaurantFormHandler);