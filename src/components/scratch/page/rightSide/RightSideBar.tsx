import styles from './RightSideBar.module.scss';
import SpriteBox from './spriteBox/SpriteBox';
import SpriteRenderer from './spriteRenderer/SpriteRenderer';
export default function RightSideBar() {
  return (
    <div className={styles.RightWrapper}>
      <SpriteRenderer />
      <SpriteBox />
    </div>
  );
}
