

const newProductName = document.getElementById('product-name')

const newProductPrice = document.getElementById('product-price')

const newProductDesc = document.getElementById('product-description')

const addToCartbtn = document.getElementById('add-to-cart')


productList = []


const addToCart = () =>{
    if(!newProductName.value || !newProductPrice.value){
        return alert('please enter valid inputs')
    }
    const data = {
        name: newProductName.value,
        price: newProductPrice.value,
        desc: newProductDesc.value,
    };
    productList.push(data);
    localStorage.setItem('products', JSON.stringify(productList));
    renderProducts();
};


addToCartbtn.addEventListener('click', addToCart)



const renderProducts = () => {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = '';
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'form-group';
        productElement.id = 'display-product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.desc}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        productListElement.appendChild(productElement);
    });

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            productList.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(productList));
            renderProducts();
        });
    });
};

