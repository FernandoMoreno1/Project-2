document.querySelector('section').addEventListener('click', element => {
    const restaurantId = element.target.id;
    if (restaurantId.search('restaurant') > -1) {
        const id = restaurantId.slice(10);
        document.location.replace('restaurants/menu/' + id);
    }
});