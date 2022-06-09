const baseUrl = 'https://platzi-avo.vercel.app';
const { data } = await window
	.fetch(`${baseUrl}/api/avo`)
	.then((response) => response.json());

const appNode = document.querySelector('#app');
appNode.className = 'mt-10 grid grid-cols-2 gap-2';
// @concept event delegation
appNode.addEventListener('click', (e) => {
	if (e.target.nodeName === 'H2') {
		window.alert(e.target.innerHTML);
	}
});

const formatPrice = (price) =>
	new window.Intl.NumberFormat('en-En', {
		style: 'currency',
		currency: 'usd',
	}).format(price);

const items = data.map(({ name: _name, price: _price, image: _image }) => {
	const container = document.createElement('div');
	container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-3';
	const image = document.createElement('img');
	image.src = `${baseUrl}${_image}`;
	image.className =
		'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6';

	const title = document.createElement('h2');
	title.textContent = _name;
	title.className = 'text-lg font-medium';

	const price = document.createElement('div');
	price.textContent = formatPrice(_price);
	price.className = 'text-gray-600';

	const priceAndTitle = document.createElement('div');
	priceAndTitle.className = 'text-center md:text-left';
	priceAndTitle.append(title, price);

	const card = document.createElement('div');
	card.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300';
	card.style.cursor = 'pointer';
	card.append(image, priceAndTitle);

	container.append(card);
	return container;
});

appNode.append(...items);
