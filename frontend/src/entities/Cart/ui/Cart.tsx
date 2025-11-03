import { baseUrl, Win95Button, Win95Card } from "../../../shared";

import styles from "./Cart.module.scss";

import classnames from "classnames/bind";

const cn = classnames.bind(styles);

type CartProps = {
  overlayClassName: string;
  sidebarClassName: string;
  cartItems: {
    title: string;
    image: string;
  }[];
  handlers: {
    onClose: () => void;
  };
};

export function Cart({
  overlayClassName,
  sidebarClassName,
  cartItems,
  handlers,
}: CartProps) {
  return (
    <>
      <div
        onClick={handlers.onClose}
        className={cn(styles.overlay, overlayClassName)}
      >
        <div className={styles.backdrop}></div>

        <Win95Card
          title={"Корзина"}
          className={cn(styles.sidebar, sidebarClassName)}
          onClose={handlers.onClose}
          onClick={(e) => e.stopPropagation()}
          classNames={{ modal: styles.sidebarModal }}
        >
          <div className={styles.items}>
            {cartItems.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cartItems.map(({ title, image }) => (
                <div key={title}>
                  <span className={styles.cartItemTitle}>{title}</span>
                  <img
                    className={styles.cartItemImage}
                    src={baseUrl.concat(image)}
                    alt={title}
                  />
                </div>
              ))
            )}
          </div>

          <div className={styles.footer}>
            {/* вынести в features */}
            <Win95Button className={styles.orderButton}>
              Оформить заказ
            </Win95Button>
          </div>
        </Win95Card>
      </div>
    </>
  );
}
