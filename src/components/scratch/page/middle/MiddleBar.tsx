import { useDrop } from 'react-dnd';
import styles from './MiddleBar.module.scss';
import { useState } from 'react';
export default function MiddleBar() {
  const [list, SetList] = useState([]);
  const [, drag] = useDrop({
    accept: ['MOTION', 'EVENTS'],
    drop: () => {
      //on drop create state using factory methos
    },
    canDrop: (item: any, monitor) => {
      // alert('fsaf');
      return true;
    }
  });
  return (
    <div ref={drag} className={styles.MiddleWrapper}>
      {/* {list.map(e)} */}
    </div>
  );
}
