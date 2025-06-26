import { shop_categories } from "./shop_categories";

interface Navigation {
  link: string;
  text: string;
  icon: string;
  subcategories?: { title: string; shopId: string; shopLink: string; shopIndex: string; }[];
}


export const nav_links: Navigation[] = [
  {
    link: "home",
    text: "Home",
    icon: "bxs-home-smile",
  },
  {
    link: "weekly-sale",
    text: "Sale",
    icon: "bxs-shopping-bag",
  },
  {
    link: "featured",
    text: "Featured",
    icon: "bxs-shopping-bag-alt",
  },
  {
    link: "arrivals",
    text: "New Arrivals",
    icon: "bxs-shopping-bags",
  },
  {
    link: "shop",
    text: "Shop",
    icon: "bxs-store",
    subcategories: shop_categories
  },
  {
    link: "contact",
    text: "Contact Us!",
    icon: "bxs-contact",
  },
];
