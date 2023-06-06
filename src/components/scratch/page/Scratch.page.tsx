import LeftSideBar from './leftSide/LeftSideBar';
import MiddleBar from './middle/MiddleBar';
import RightSideBar from './rightSide/RightSideBar';
import styles from './Scratch.module.scss';
import { DndProvider } from 'react-dnd';
import * as Backend from 'react-dnd-html5-backend';
export default function ScratchPage() {
  return (
    <DndProvider backend={Backend.HTML5Backend}>
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
