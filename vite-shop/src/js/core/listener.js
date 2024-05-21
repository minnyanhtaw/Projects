import { handlerCategoryGroup } from "../app/category.js";
import { categoryGroup } from "./selectors.js";

const listener = () => {
    categoryGroup.addEventListener("click",handlerCategoryGroup)
}

export default listener;