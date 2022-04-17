document.querySelector('section').addEventListener('click', element => {
    const productId = element.target.id;
    console.log(productId);
    if (productId.search('product') > -1) {
        newDiv = document.createElement('div');
        newDiv.classList.add('cartItem');

        itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        itemName = document.createElement('h4');
        itemName.innerText = 'Test';

        itemPrice = document.createElement('p');
        itemPrice.innerText = 'Price: $10';

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        newDiv.appendChild(itemDiv);

        document.getElementById('cart').appendChild(newDiv);
    }
});