import LeftSideBar from '../leftSide/LeftSideBar';
import MiddleBar from '../middle/MiddleBar';
import RightSideBar from '../rightSide/RightSideBar';
import styles from './Scratch.module.scss';
export default function ScratchPage() {
  return (
    <div className={styles.scratchPage}>
      <div className={styles.left}>
        <LeftSideBar />
      </div>
      <div className={styles.middle}>
        <MiddleBar />
      </div>
      <div className={styles.rightSide}>
        <RightSideBar />
      </div>
    </div>
  );
}
