import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LikeStore {
  likedPosts: number[];
  toggleLike: (id: number) => void;
  isLiked: (id: number) => boolean;
}

export const useLikeStore = create<LikeStore>()(
  persist(
    (set, get) => ({
      likedPosts: [],
      toggleLike: (id) => {
        const liked = get().likedPosts;
        if (liked.includes(id)) {
          set({ likedPosts: liked.filter((postId) => postId !== id) });
        } else {
          set({ likedPosts: [...liked, id] });
        }
      },
      isLiked: (id: number) => {
        return get().likedPosts.includes(id);
      },
    }),
    {
      name: "features/Like",
    }
  )
);
