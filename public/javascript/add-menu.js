async function newMenuFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#restaurant-name').value.trim();
    const owner_id = this.id.slice(5);

    if (name) {
        const response = await fetch('/api/menus', {
            method: 'post',
            body: JSON.stringify({
                name,
                owner_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/restaurants/admin');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.new-menu-form').addEventListener('submit', newMenuFormHandler);