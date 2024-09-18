export const sortfn = (products, sort) => {
  let sortedProducts = [...products];

  if (sort == 0) {
    sortedProducts.sort(() => Math.random() - 0.5);
  }
  if (sort == 1) {
    sortedProducts.sort((a, b) => {
      return parseFloat(b.discount) - parseFloat(a.discount);
    });
  }
  if (sort == 2) {
    sortedProducts.sort((a, b) => {
      return parseFloat(b.rating) - parseFloat(a.rating);
    });
  }
  if (sort == 3) {
    sortedProducts.sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  }
  if (sort == 4) {
    sortedProducts.sort((a, b) => {
      return parseFloat(b.price) - parseFloat(a.price);
    });
  }

  return sortedProducts;
};
