import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  isOpen: boolean;
  toggleIsOpen: (flag: boolean) => void;
  cartItems: number[];
  toggleCartItem: (id: number) => void;
  isInCart: (id: number) => boolean;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      isOpen: false,
      toggleIsOpen: (flag: boolean) => set({ isOpen: flag }),
      cartItems: [],
      toggleCartItem: (id) => {
        const cart = get().cartItems;
        if (cart.includes(id)) {
          set({ cartItems: cart.filter((itemId) => itemId !== id) });
        } else {
          set({ cartItems: [...cart, id] });
        }
      },
      isInCart: (id: number) => {
        return get().cartItems.includes(id);
      },
    }),
    {
      name: "features/Cart",
    }
  )
);
