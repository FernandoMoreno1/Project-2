async function newProductFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#product-name').value.trim();
    const price = document.querySelector('#product-price').value.trim();
    const description = document.querySelector('#product-description').value.trim();
    const owner_id = this.id.slice(5);

    if (name && price && description) {
        const response = await fetch('/api/products', {
            method: 'post',
            body: JSON.stringify({
                name,
                price,
                description,
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

document.querySelector('.new-product-form').addEventListener('submit', newProductFormHandler);