import { useAppSelector } from '@/hooks/store/useAppSelector';
import styles from './SpriteRenderer.module.scss';
import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import scratchSlice from '@/store/scratch/scratch.slice';
export default function SpriteRenderer() {
  const allSprite = useAppSelector((state) => state.scratch.sprites);
  const currentSlected = useAppSelector((state) => state.scratch.currentSliceId);
  const dispatch = useAppDispatch();
  function onClickEvent(spriteId: string) {
    dispatch(scratchSlice.actions._event_onClickSplice({ spriteId }));
  }
  return (
    <div className={styles.spriteRenderer} id={'sprite_renderer'}>
      {allSprite.map((sprite) => {
        return (
          <img
            draggable={true}
            data-is-selected={sprite.id === currentSlected}
            key={sprite.id}
            id={'render-' + sprite.id}
            onClick={() => {
              onClickEvent(sprite.id);
            }}
            src={sprite.img}
            style={{
              position: 'absolute',
              width: '3em',
              height: '4em',
              transform: 'rotateZ(0deg) scale(1) translateX(0px) translateY(0px)'
            }}
            className={styles.renderImg}></img>
        );
      })}
    </div>
  );
}
