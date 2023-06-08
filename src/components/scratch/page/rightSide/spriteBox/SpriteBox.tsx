import { useAppSelector } from '@/hooks/store/useAppSelector';
import styles from './SpriteBox.module.scss';
import AddSprite from '../addSprite/AddSprite';
import { crossIcon } from '@/assets/generic';
import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import scratchSlice from '@/store/scratch/scratch.slice';
export default function SpriteBox() {
  const storedSprited = useAppSelector((state) => state.scratch.sprites);
  const selectedSprite = useAppSelector((store) => store.scratch.currentSliceId);
  const dispatch = useAppDispatch();
  function removeSprite(id: string) {
    dispatch(scratchSlice.actions.removeSprite({ id }));
    if (id === selectedSprite) {
      dispatch(scratchSlice.actions.switchCurrentSprite({ id: undefined }));
    }
  }
  function setCurrentSelectedId(id: string) {
    dispatch(scratchSlice.actions.switchCurrentSprite({ id }));
  }
  return (
    <div className={styles.spriteBox}>
      {storedSprited.map((e) => {
        return (
          <div
            key={e.id}
            className={styles.eachSprite}
            data-is-selected={e.id === selectedSprite}
            onClick={() => {
              setCurrentSelectedId(e.id);
            }}>
            <img
              className={styles.removeIcon}
              src={crossIcon}
              onClick={(evnt) => {
                evnt.stopPropagation();
                removeSprite(e.id);
              }}></img>
            <img src={e.img} alt="img" />
            {e.name}
          </div>
        );
      })}
      <div className={styles.addSprite}>
        <AddSprite />
      </div>
    </div>
  );
}
