
import { products } from "./products";

interface Cats {
  title: string;
  shopId: string;
  shopLink: string;
  shopIndex: string;
}

export const shop_categories: Cats[] = [...new Set(products.map(item => item.cat).filter(cat => cat))].map(cat => ({ cat }))
  .map((item, index) => {
    return {
      ...item,
      title: item.cat,
      shopId: item.cat.toLowerCase().replace(/\s+/g, '_'),
      shopLink: item.cat.toLowerCase().replace(/\s+/g, '_') + '_shop',
      shopIndex: `shop-` + index
    }
  });