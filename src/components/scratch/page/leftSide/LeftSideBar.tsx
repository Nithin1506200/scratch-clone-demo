import styles from './LeftSideBar.module.scss';

import { Move } from '../../blocks/motion';
import { FlagClicked } from '../../blocks/events';
import DraggableWrapper from './DraggableWrapper';
export default function LeftSideBar() {
  return (
    <div className={styles.leftsideWrapper}>
      <div>Motion</div>
      <DraggableWrapper transferProps={{ type: 'MOTION', subType: 'MOTION_MOVE' }}>
        <Move.element steps={0} />
      </DraggableWrapper>
      <div>Events</div>
      <DraggableWrapper transferProps={{ type: 'EVENTS', subType: 'FLAG_CLICKED' }}>
        <FlagClicked.element />
      </DraggableWrapper>
    </div>
  );
}
