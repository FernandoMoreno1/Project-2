let checkoutTotal = parseFloat(0);

document.querySelector('section').addEventListener('click', element => {
    const productId = element.target.id;
    if (productId.search('product') > -1) {
        newDiv = document.createElement('div');
        newDiv.classList.add('cartItem');

        itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const parentNode = element.target.parentNode;
        itemName = document.createElement('h4');
        itemName.innerText =  parentNode.childNodes[1].innerText;

        itemPrice = document.createElement('p');
        itemPrice.innerText = parentNode.childNodes[3].innerText;
        const priceVar = parseFloat(itemPrice.innerText.split('$')[1]);
        checkoutTotal += priceVar;
        document.getElementById('total').innerText = 'Price: $' + checkoutTotal.toFixed(2);

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        newDiv.appendChild(itemDiv);

        document.getElementById('cart').appendChild(newDiv);
    }
});