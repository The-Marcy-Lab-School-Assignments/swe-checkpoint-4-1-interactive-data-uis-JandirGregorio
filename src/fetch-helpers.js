export const fetchData = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) throw Error (`Fetch failed. ${response.status} ${response.statusText}`);

      return response.json();
    })
    .catch((error) => {
      return error;
    })
};

// https://dummyjson.com/products
export const getProducts = () => {
  return fetchData('https://dummyjson.com/products')
    .then((data) => {
      return { data: data.products, error: null};
    })
    .catch((error) => {
      return { data: null, error};
    })
};

export const getProductById = (id) => {
  return fetchData(`https://dummyjson.com/products/${id}`)
    .then((data) => {
      console.log(data);
      return { data, error: null };
    })
    .catch((error) => {
      return { data: null, error};
    })
};

export const searchProducts = async (query) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    if (!response.ok) throw Error (`Fetch failed. ${response.status} ${response.statusText}`);

    const data = await response.json();
    return { data: data.products, error: null };
  }
  catch (error) {
    return { data: null, error};
  }
};
