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
  productDetails.innerHTML = '';
  productDetails.classList.remove('hidden');

  const productH2 = document.createElement('h2');
  const productImage = document.createElement('img');
  const productParPrice = document.createElement('p');
  const productPrice = document.createElement('span');
  const productDescription = document.createElement('p');
  const productParRating = document.createElement('p');
  const productRating = document.createElement('span');

  productH2.id = 'product-title';
  productImage.id = 'product-thumbnail';
  productParPrice.id = 'product-price';
  productDescription.id = 'product-description';
  productRating.id = 'product-rating';

  productH2.textContent = product.title;
  productImage.src = product.thumbnail;
  productImage.alt = product.title;
  productParPrice.textContent = 'Price: $';
  productPrice.textContent = product.price;
  productDescription.textContent = product.description;
  productParRating.textContent = 'Rating: ';
  productRating.textContent = product.rating;
  productRating.textContent += ' / 5';

  // Append spans
  productParPrice.append(productPrice);
  productParRating.append(productRating);

  productDetails.append(productH2, productImage, productParPrice, productDescription, productParRating);
};
