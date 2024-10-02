import React from "react";
import { notFound } from "next/navigation";
import Productcard from "../_components/Productcard";
import Secondnav from "./_Components/Secondnav";
import { categorylist } from "../commondata";
import { Cachedproducts } from "../_serveractions/Getcachedata";
import Productnotfound from "../_components/Productnotfound";
import Subcategories from "./_Components/Subcategories";
import { sortProducts, pricefilter } from "./_Components/sortandfilter";
import Productpage from "../_productpage/Productpage";

export const generateMetadata = async ({ params, searchParams }) => {
  const { Category: slug } = params;
  const category = slug && slug[0] ? decodeURIComponent(slug[0]) : null;
  const subcat = slug && slug[1] ? decodeURIComponent(slug[1]) : null;
  const productid = slug && slug[2] ? decodeURIComponent(slug[2]) : null;
  if (productid) {
    const allproducts = await Cachedproducts();
    const filteredProduct = allproducts.find((item) => item._id === productid);
    const color = searchParams?.color || 0;
    const ogimage = filteredProduct.colorpalets[color].images[0];
    return {
      title: filteredProduct?.name + " | Adorefurnix",
      description: filteredProduct?.desc[0],
      keywords: filteredProduct?.keywords,
      openGraph: {
        images: ogimage,
      },
    };
  } else if (subcat) {
    return {
      title: `Get ${subcat} At Best Price Online in India | ${new Date().getFullYear()}`,
      description: categorylist[category]?.desc,
      // openGraph: {
      //   images: ogimage,
      // },
    };
  } else if (category != "Search") {
    return {
      title: `Get ${
        categorylist[category]?.name
      } At Best Price Online in India | ${new Date().getFullYear()}`,
      description: categorylist[category]?.desc,
      // openGraph: {
      //   images: ogimage,
      // },
    };
  }
};

async function page({ params, searchParams }) {
  const { Category: slug } = params;

  const category = slug && slug[0] ? decodeURIComponent(slug[0]) : null;
  const subcat = slug && slug[1] ? decodeURIComponent(slug[1]) : null;
  const productid = slug && slug[2] ? decodeURIComponent(slug[2]) : null;

  if (productid)
    return (
      <Productpage
        category={category}
        subcat={subcat}
        productid={productid}
        color={searchParams?.color || 0}
      />
    );

  // Get products
  let allproducts = await Cachedproducts();
  const pricerange = searchParams.pricerange || 0;
  let producttorender;

  if (category == "Search") {
    const searchQuery = searchParams?.query;
    producttorender = searchProducts(allproducts, searchQuery);
  } else {
    validateCategoryAndSubcategory(category, subcat);
    producttorender = categoriesedproducts(allproducts, category, subcat);
  }

  // Filter products
  const pricerangedproducts = pricefilter(producttorender, pricerange);

  const sortedProducts = sortProducts(
    pricerangedproducts,
    searchParams.sort || 0
  );

  const lengthofproducts = sortedProducts.length;

  return (
    <div className="flex flex-col lg:flex-row">
      <Secondnav
        category={category}
        subcat={subcat}
        searchParams={searchParams}
        lengthofproducts={lengthofproducts}
      />
      <div className="w-full">
        <Subcategories category={category} subcat={subcat} />
        {sortedProducts.length > 0 ? (
          <ProductGrid products={sortedProducts} />
        ) : (
          <Productnotfound />
        )}
      </div>
    </div>
  );
}

const ProductGrid = ({ products }) => (
  <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[10px] md:gap-[20px] p-[10px] md:p-[20px]">
    {products.map((item, i) => (
      <Productcard
        key={i + new Date().getMilliseconds() + Math.random()} // More stable key
        index={i}
        id={item._id}
        image={item.colorpalets[0]?.images[0]}
        {...item}
      />
    ))}
  </div>
);

function searchProducts(allproducts, searchQuery) {
  const words = searchQuery?.split(" ") || [];

  // Filtering products based on the search query
  words.forEach((word) => {
    if (word.trim() !== "") {
      allproducts = allproducts.filter((product) => {
        const nameMatch = product?.name
          ?.toLowerCase()
          .includes(word.toLowerCase());

        const descMatch = product?.desc?.some((descItem) =>
          descItem.toLowerCase().includes(word.toLowerCase())
        );

        const keywordsMatch = product?.keywords
          ?.toLowerCase()
          .includes(word.toLowerCase());

        const categoryMatch = product?.category
          ?.toLowerCase()
          .includes(word.toLowerCase());

        const subcategoryMatch = product?.subcat
          ?.toLowerCase()
          .includes(word.toLowerCase());

        return (
          nameMatch ||
          descMatch ||
          keywordsMatch ||
          categoryMatch ||
          subcategoryMatch
        );
      });
    }
  });

  // Sorting the filtered products
  return allproducts.sort((a, b) => {
    const nameA = a?.name?.toLowerCase();
    const nameB = b?.name?.toLowerCase();
    const lowerQuery = searchQuery?.toLowerCase();

    if (nameA.includes(lowerQuery) && !nameB.includes(lowerQuery)) {
      return -1;
    } else if (!nameA.includes(lowerQuery) && nameB.includes(lowerQuery)) {
      return 1;
    } else {
      return 0;
    }
  });
}

const validateCategoryAndSubcategory = (category, subcat) => {
  if (!category || !Object.keys(categorylist).includes(category)) {
    notFound();
  }

  if (
    subcat &&
    !categorylist[category].subcat.some((item) => item.name === subcat)
  ) {
    notFound();
  }
};

const categoriesedproducts = (allproducts, category, subcat) => {
  return allproducts.filter((item) => {
    const inCategory = item.category === category;
    const inSubcat = subcat ? item.subcat === subcat : true;
    return inCategory && inSubcat;
  });
};

export default page;
