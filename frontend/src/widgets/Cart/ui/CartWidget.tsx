import { useState } from "react";
import { Win95Button } from "../../../shared";
import { IconCartCheck } from "../../../shared/icons";
import { Cart, useCartStore } from "../../../entities";
import styles from "./CartWidget.module.scss";

import classnames from "classnames/bind";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../shared/api";

const cn = classnames.bind(styles);

export function CartWidget() {
  const { isOpen, toggleIsOpen } = useCartStore();
  const cartStore = useCartStore();
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => apiClient.products.productControllerFindAll({}),
  });

  const items = data?.data.data
    .filter((product) => cartStore.cartItems.includes(product?.id))
    .map((item) => ({
      title: item.title,
      image: item.image,
    }));

  return (
    <>
      <Win95Button onClick={() => toggleIsOpen(true)}>
        Корзина <IconCartCheck />
      </Win95Button>

      <Cart
        overlayClassName={isOpen ? styles.overlayVisible : styles.overlayHidden}
        sidebarClassName={cn(styles.sidebar, { [styles.sidebarOpen]: isOpen })}
        cartItems={items ?? []}
        handlers={{
          onClose: () => toggleIsOpen(false),
        }}
      />
    </>
  );
}
