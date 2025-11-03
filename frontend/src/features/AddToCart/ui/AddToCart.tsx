import { useCartStore, useNotificationStore } from "../../../entities";
import { Win95Button } from "../../../shared";
import { IconCart, IconCartCheck } from "../../../shared/icons";

type AddToCartProps = {
  id: number;
  title: string;
  disabled: boolean;
};

export function AddToCart({ id, title, disabled }: AddToCartProps) {
  const cartStore = useCartStore();
  const notification = useNotificationStore();

  const isActive = cartStore.isInCart(id);

  const onAddToCart = () => {
    cartStore.toggleCartItem(id);

    if (!isActive) {
      notification.showMessage(`Товар ${title} добавлен в корзину`, "info");
    } else {
      notification.showMessage(`Товар ${title} удален из корзины`, "info");
    }
  };

  return (
    <Win95Button disabled={disabled} onClick={onAddToCart}>
      {isActive ? null : "В корзину"}
      {isActive ? <IconCartCheck /> : <IconCart />}
    </Win95Button>
  );
}
