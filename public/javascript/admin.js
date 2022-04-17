async function delItem(itemClass,itemId) {
    if (itemClass && itemId) {
        const response = await fetch('/api/' + itemClass + '/' + itemId, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/restaurants/admin');
        } else {
            alert(response.statusText);
        }
    }
}

async function addClicked(event) {
    event.preventDefault();
    const item = this.id.slice(4);

    document.location.replace('/' + item + '/add-' + item);
}

async function editClicked(event) {
    event.preventDefault();
    const item = this.id.slice(5);

    document.location.replace('/' + item + '/edit-' + item);
}

async function delClicked(event) {
    event.preventDefault();

    const selection = document.querySelector('#select-item').value;
    if (selection.search("restaurant") > -1) {
        const itemClass = 'restaurants';
        const itemId = selection.slice(itemClass.length);
        delItem(itemClass,itemId);
    } else if (selection.search("menu") > -1) {
        const itemClass = 'menus';
        const itemId = selection.slice(itemClass.length);
        delItem(itemClass,itemId);
    } else if (selection.search("product") > -1) {
        const itemClass = 'products';
        const itemId = selection.slice(itemClass.length);
        delItem(itemClass,itemId);
    }
}

document.querySelector('#add-restaurants').addEventListener('click', addClicked);

document.querySelector('#add-menus').addEventListener('click', addClicked);
document.querySelector('#edit-menus').addEventListener('click', editClicked);

document.querySelector('#add-products').addEventListener('click', addClicked);

document.querySelector('.del-button').addEventListener('click', delClicked);