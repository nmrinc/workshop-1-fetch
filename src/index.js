const baseUrl = 'https://platzi-avo.vercel.app';
const { data } = await window
	.fetch(`${baseUrl}/api/avo`)
	.then((response) => response.json());

const appNode = document.querySelector('#app');

const items = data.map(({ name: _name, price: _price, image: _image }) => {
	const container = document.createElement('div');
	const image = document.createElement('img');
	image.src = `${baseUrl}${_image}`;
	const title = document.createElement('h2');
	title.textContent = _name;
	const price = document.createElement('p');
	price.textContent = _price;

	container.append(image, title, price);
	return container;
});

appNode.append(...items);
