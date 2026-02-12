import { getProducts, getProductById, searchProducts } from "./fetch-helpers";
import { renderProductDetails, renderProducts } from "./dom-helpers";

const productsList = document.querySelector('#products-list');
const searchForm = document.querySelector('#search-form');

getProducts()
  .then((products) => {
    const { data, error } = products;
    if (data === null) {
      const errorMessage = document.querySelector('#error-message');
      errorMessage.textContent = error.message;
      return;
    } 
    renderProducts(data);
});

productsList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');
  if (!clickedLi) return;
  const productId = clickedLi.dataset.productId;

  getProductById(productId)
    .then((product) => {
      const { data, error } = product;

      if (data === null) {
        const errorMessage = document.querySelector('#error-message');
        errorMessage.textContent = error.message;
        return;
      }
      renderProductDetails(data);
    });
});

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = searchForm.elements.query.value;
  const products = await searchProducts(query);

  const { data, error } = products;
  if (data === null) {
    const errorMessage = document.querySelector('#error-message');
    errorMessage.textContent = error.message;
    return;
  }
  renderProducts(data);
  searchForm.reset();
})
