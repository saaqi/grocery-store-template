import { snacks_and_drinks } from "./products/snacks_and_drinks";
import { fresh_fruits } from "./products/fresh_fruits";
import { vegetables } from "./products/vegetables";
import { frozen_foods } from "./products/frozen_foods";
import { ready_to_cook } from "./products/ready_to_cook";
import { home_essentials } from "./products/home_essentials";
import { electronics } from "./products/electronics";
import { telecommunications } from "./products/telecommunications";
import { misc } from "./products/misc";

// Combine all products from different categories into one array
export const products = [
  ...snacks_and_drinks,
  ...fresh_fruits,
  ...vegetables,
  ...ready_to_cook,
  ...frozen_foods,
  ...home_essentials,
  ...electronics,
  ...telecommunications,
  ...misc,
].map((item, index) => {
  return {
    ...item,
    id: `products-${index}`
  };
});


// Sort the products array by the 'added' property
// export const dateSortedProducts = products.sort((a, b) => (b.added) - (a.added));
// Sort the products array by alphabetically by the 'title' property
// export const alphabetSortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));