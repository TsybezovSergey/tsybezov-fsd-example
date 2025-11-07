import { FullProductCard } from "@/src/widgets";
import apiClient from "@/src/shared/api";
import { Win95Calendar } from "@/src/shared";
import styles from "./ProductsPage.module.scss";

export default async function ProductsPage() {
  const res = await apiClient.product.productControllerFindAll();

  return (
    <div className={styles.productsPage}>
      {res.data?.data?.map((product) => (
        <FullProductCard key={product.id} product={product} />
      ))}
      <Win95Calendar />
    </div>
  );
}
