async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="product-name"]').value.trim();
    const price = document.querySelector('input[name="product-price"]').value.trim();
    const description = document.querySelector('input[name="product-description"]').value.trim();
    const restaurant_id = document.querySelector('input[name="product-restaurant_id"]').value.trim();

    const response = await fetch(`/api/products/`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        price,
        description,
        restaurant_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace(`/menu/${restaurant_id}`);
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-product-form').addEventListener('submit', newFormHandler);
  