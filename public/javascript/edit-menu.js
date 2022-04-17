async function addProductsHandler(event) {
    event.preventDefault();

    const menu_id = document.querySelector('#select-menu').value;

    const checkboxes = document.getElementsByTagName('input');
    let checkedProducts = [];
    for (let i=0; i<checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            checkedProducts.push(checkboxes[i].name.slice(7));
        }
    }

    let newProductArray = []
    checkedProducts.forEach(element => {
        newProductArray.push({
            'menu_id' : menu_id,
            'product_id' : element
        })
    });

    if (newProductArray) {
        const response = await fetch('/api/menuproducts', {
            method: 'post',
            body: JSON.stringify({
                newProductArray
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

document.querySelector('#add-prod-button').addEventListener('click', addProductsHandler);