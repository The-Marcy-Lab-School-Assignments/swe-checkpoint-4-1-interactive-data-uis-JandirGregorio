export const renderProducts = (products) => {
  const productList = document.querySelector('#products-list');
  const productCount = document.querySelector('#product-count');
  productList.innerHTML = '';
  productCount.textContent = products.length;

  products.forEach((product) => {
    // Create
    const productLi = document.createElement('li');
    const productImage = document.createElement('img');
    const productH3 = document.createElement('p3');
    const productP = document.createElement('p');

    // Modify
    productImage.src = product.thumbnail;
    productImage.alt = product.title;
    productH3.textContent = product.title;
    productP.textContent = `$${product.price}`;
    productLi.dataset.productId = product.id;

    // Append
    productLi.append(productImage, productH3, productP);
    productList.append(productLi);
  });
};

export const renderProductDetails = (product) => {
  const productDetails = document.querySelector('#product-details');
  productDetails.classList.remove('hidden');

  const productTitle = document.querySelector('#product-title');
  const productImage = document.querySelector('#product-thumbnail');
  const productPrice = document.querySelector('#product-price');
  const productDescription = document.querySelector('#product-description');
  const productRating = document.querySelector('#product-rating');

  productTitle.textContent = '';
  productImage.src = '';
  productImage.alt = '';
  productPrice.textContent = '';
  productDescription.textContent = ''
  productRating.textContent = '';
  
  productTitle.textContent = product.title;
  productImage.src = product.thumbnail;
  productImage.alt = product.titi;
  productPrice.textContent = `$${product.price}`;
  productDescription.textContent = product.description;
  productRating.textContent = product.rating;
};
