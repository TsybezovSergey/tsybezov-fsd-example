import { ReactNode } from "react";
import { baseUrl, declensionMap, Product, Win95Card } from "../../../shared";
import styles from "./ProductCard.module.scss";

import classnames from "classnames/bind";
import Image from "next/image";

const cn = classnames.bind(styles);

type ProductCardProps = {
  product: Product;
  children?: ReactNode;
  buttonGroup: ReactNode;
};

export function ProductCard({
  product,
  buttonGroup,
  children,
}: ProductCardProps) {
  const availableContent = !!product.availableQuantity
    ? `Осталось ${declensionMap.countDeclension(product.availableQuantity)}`
    : "Нет в наличии";

  return (
    <Win95Card
      classNames={{ description: styles.productCardDescription }}
      title={product.title ?? ""}
      description={product.description}
    >
      <div
        className={cn(styles.productCardImageWrap, {
          productCardImageWrapDisabled: !product.availableQuantity,
        })}
      >
        <img
          className={styles.productCardImage}
          src={baseUrl.concat(product.image)}
          alt={product.title}
        />
      </div>

      <hr className={styles.productCardHr} />
      <p aria-label="Важная информация">{availableContent}</p>

      {children}

      <div className={styles.productCardButtonGroup}>{buttonGroup}</div>
    </Win95Card>
  );
}
