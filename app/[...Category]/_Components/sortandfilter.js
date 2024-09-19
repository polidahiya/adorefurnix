import { filterlist } from "@/app/commondata";

export const sortProducts = (products, sort) => {
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

export const filterProducts = (allproducts, category, subcat, pricerange) => {
  return allproducts.filter((item) => {
    const inCategory = item.category === category;
    const inSubcat = subcat ? item.subcat === subcat : true;
    const withinPriceRange =
      pricerange === 0 ||
      (item.price >= filterlist[pricerange].min &&
        item.price <= filterlist[pricerange].max);

    return inCategory && inSubcat && withinPriceRange;
  });
};