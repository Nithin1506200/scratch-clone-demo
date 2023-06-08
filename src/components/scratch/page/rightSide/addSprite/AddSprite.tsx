import { useEffect, useRef, useState } from 'react';
import styles from './AddSprite.module.scss';
import allSpritesSvg from '@/assets/sprites';
import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import scratchSlice from '@/store/scratch/scratch.slice';
import { v4 } from 'uuid';

export default function AddSprite() {
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listner = (evt: MouseEvent) => {
      if (!ref.current?.contains(evt.target as any)) {
        //
        setShowPopup(false);
      }
    };
    document.addEventListener('click', listner);
    return () => {
      document.removeEventListener('click', listner);
    };
  }, [ref.current]);
  const dispatch = useAppDispatch();
  function addSprite(name: string, img: string) {
    dispatch(scratchSlice.actions.addSprite({ id: v4(), name, img }));
  }
  return (
    <div className={styles.AddSprite} ref={ref}>
      <div
        className={styles.addButton}
        onClick={() => {
          setShowPopup(true);
        }}>
        <span>+</span>
      </div>
      {showPopup && (
        <div className={styles.allSprite}>
          {allSpritesSvg.map((sprite) => {
            return (
              <div
                key={sprite.name}
                className={styles.eachSprite}
                onClick={() => {
                  addSprite(sprite.name, sprite.img);
                  setShowPopup(false);
                }}>
                <img src={sprite.img} className={styles.img}></img>
                <div>{sprite.name}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
