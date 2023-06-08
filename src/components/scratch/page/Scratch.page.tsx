import { flagSvg } from '@/assets/generic';
import LeftSideBar from './leftSide/LeftSideBar';
import MiddleBar from './middle/MiddleBar';
import RightSideBar from './rightSide/RightSideBar';
import styles from './Scratch.module.scss';
import { DndProvider } from 'react-dnd';
import * as Backend from 'react-dnd-html5-backend';
import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import scratchSlice from '@/store/scratch/scratch.slice';
export default function ScratchPage() {
  const dispatch = useAppDispatch();
  function onClickFlag() {
    dispatch(scratchSlice.actions._event_onClickFlag());
  }
  return (
    <DndProvider backend={Backend.HTML5Backend}>
      <header className={styles.header}>
        <img src={flagSvg} alt="flag" className={styles.flag} onClick={onClickFlag} />
      </header>
      <div className={styles.scratchPage}>
        <div className={styles.left}>
          <LeftSideBar />
        </div>
        <div className={styles.middle}>
          <MiddleBar />
        </div>
        <div className={styles.right}>
          <RightSideBar />
        </div>
      </div>
    </DndProvider>
  );
}
