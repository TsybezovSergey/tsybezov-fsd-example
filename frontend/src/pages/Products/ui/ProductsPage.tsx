import React from "react";
import apiClient from "../../../shared/api";

import { useQuery } from "@tanstack/react-query";
import styles from "./ProductsPage.module.scss";
import { FullProductCard } from "../../../widgets/FullProductCard/ui/FullProductCard";

export const ProductsPage: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => apiClient.products.productControllerFindAll({}),
  });

  return (
    <div className={styles.productsPage}>
      {data?.data.data?.map((product) => (
        <FullProductCard product={product} />
      ))}
    </div>
  );
};
