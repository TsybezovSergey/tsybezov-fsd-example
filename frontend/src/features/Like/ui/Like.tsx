import { Win95Button } from "../../../shared";
import { IconLikeFill } from "../../../shared/icons";
import { IconLike } from "../../../shared/icons/Like/Like";
import { useLikeStore } from "../model/store";

type LikeProps = {
  id: number;
  disabled: boolean;
};

export function Like({ id, disabled }: LikeProps) {
  const likeStore = useLikeStore();

  return (
    <Win95Button disabled={disabled} onClick={() => likeStore.toggleLike(id)}>
      Нравится {likeStore.isLiked(id) ? <IconLikeFill /> : <IconLike />}
    </Win95Button>
  );
}
