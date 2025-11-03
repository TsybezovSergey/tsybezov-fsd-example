import { getProduct } from "../api-generated/product/product";

const apiClient = {
  products: getProduct(),
};

export default apiClient;
