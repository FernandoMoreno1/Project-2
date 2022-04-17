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

async function deleteClicked(event) {
    event.preventDefault();
    const item = this.id.slice(7);

    document.location.replace('/' + item + '/delete-' + item);
}

document.querySelector('#add-restaurants').addEventListener('click', addClicked);
document.querySelector('#delete-restaurants').addEventListener('click', deleteClicked);

document.querySelector('#add-menus').addEventListener('click', addClicked);
document.querySelector('#edit-menus').addEventListener('click', editClicked);
document.querySelector('#delete-menus').addEventListener('click', deleteClicked);

document.querySelector('#add-products').addEventListener('click', addClicked);
document.querySelector('#delete-products').addEventListener('click', deleteClicked);