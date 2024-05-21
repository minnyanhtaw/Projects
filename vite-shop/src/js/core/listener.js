import { handlerCartItemGroup } from "../app/cart.js";
import { handlerCategoryGroup } from "../app/category.js";
import { handlerProductGroup } from "../app/product.js";
import { cartItemGroup, categoryGroup, productGroup } from "./selectors.js";

const listener = () => {
  categoryGroup.addEventListener("click", handlerCategoryGroup);
  productGroup.addEventListener("click", handlerProductGroup);
  cartItemGroup.addEventListener("click", handlerCartItemGroup);
};

export default listener;
