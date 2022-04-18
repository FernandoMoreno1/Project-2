const restaurants = document.querySelector('section');

restaurants.addEventListener('click', (event) => {
    const restaurant = event.target;
    window.location.href = '/menu/' + restaurant.id.slice(6);
});