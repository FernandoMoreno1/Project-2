async function deleteFormHandler(event) {
    event.preventDefault();
  
    const restaurant_id = document.querySelector('input[name="product-restaurant_id"]').value.trim();
    const id = document.querySelector('input[name="product-id"]').value.trim();

    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace(`/menu/${restaurant_id}`);
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-product-btn').addEventListener('click', deleteFormHandler);
  