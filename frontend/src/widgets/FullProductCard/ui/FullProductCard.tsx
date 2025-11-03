import { ProductCard } from "../../../entities";
import { AddToCart, Like } from "../../../features";
import { Product } from "../../../shared";

type FullProductCardProps = {
  product: Product;
};

export function FullProductCard({ product }: FullProductCardProps) {
  return (
    <ProductCard
      buttonGroup={
        <>
          <Like disabled={!product.availableQuantity} id={product.id} />
          <AddToCart
            disabled={!product.availableQuantity}
            id={product.id}
            title={product.title}
          />
        </>
      }
      product={product}
    />
  );
}
