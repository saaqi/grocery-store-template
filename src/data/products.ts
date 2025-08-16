import { foods } from './products/foods';
import { snacks_and_drinks } from './products/snacks_and_drinks';
import { vegetables } from './products/vegetables';
import { fresh_fruits } from './products/fresh_fruits';
import { frozen_foods } from './products/frozen_foods';
import { ready_to_cook } from './products/ready_to_cook';
import { home_essentials } from './products/home_essentials';
import { electronics } from './products/electronics';
import { travel } from './products/travel';
import { telecommunications } from './products/telecommunications';
import { toys } from './products/toys';
import { misc } from './products/misc';

// Combine all products from different categories into one array
export const products = [
	...foods,
	...snacks_and_drinks,
	...fresh_fruits,
	...vegetables,
	...frozen_foods,
	...ready_to_cook,
	...home_essentials,
	...travel,
	...electronics,
	...telecommunications,
	...toys,
	...misc
].map((item, index) => {
	return {
		...item,
		id: `card#${index}`
	};
});

// Sort the products array by the 'added' property
export const dateSortedProducts = [...products].sort(
	(a, b) => new Date(b.added).getTime() - new Date(a.added).getTime()
);
// Sort the products array by alphabetically by the 'title' property
export const alphabetSortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
