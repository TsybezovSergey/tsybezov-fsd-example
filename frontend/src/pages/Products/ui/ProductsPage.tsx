import apiClient from "../../../shared/api";

import styles from "./ProductsPage.module.scss";
import { FullProductCard } from "../../../widgets/FullProductCard/ui/FullProductCard";

export default async function ProductsPage() {
  const res = await apiClient.product.productControllerFindAll();

  return (
    <div className={styles.productsPage}>
      {res.data?.data?.map((product) => (
        <FullProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
