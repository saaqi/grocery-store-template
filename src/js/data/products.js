import fresh_fruits from "./products/fresh_fruits.json";
import fresh_vegetables from "./products/fresh_vegetables.json";
import frozen_meats from "./products/frozen_meats.json";
import frozen_seafood from "./products/frozen_seafood.json";
import frozen_vegetables from "./products/frozen_vegetables.json";
import crown_foods from "./products/crown_foods.json";
import telecommunications from "./products/telecommunications.json";

// Combine all products from different categories into one array
export const products = [
  ...fresh_fruits,
  ...fresh_vegetables,
  ...frozen_meats,
  ...frozen_seafood,
  ...frozen_vegetables,
  ...crown_foods,
  ...telecommunications,
].map((item, index) => {
  return {
    ...item,
    id: `products-${index}`
  };
});


// Sort the products array by the 'added' property
export const dateSortedProducts = [...products].sort((a, b) => (b.added) - (a.added));
// Sort the products array by alphabetically by the 'title' property
export const alphabetSortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));