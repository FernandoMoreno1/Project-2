var cart = document.querySelector('h1');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');


for (var but of button) {
	but.addEventListener('click', (e) => {
		var add = Number(cart.getAttribute('data-count') || 0);
		cart.setAttribute('data-count', add + 1);
		cart.classList.add('zero')

		// copy and paste //
		var parent = e.target.parentNode;
		var clone = parent.cloneNode(true);
		select.appendChild(clone);
		clone.lastElementChild.innerText = "Buy-now";

		if (clone) {
			cart.onclick = () => {
				select.classList.toggle('display');
			}
		}
	})
}
