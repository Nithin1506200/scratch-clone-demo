import styles from './LeftSideBar.module.scss';

import { Move, RotateAntiClockWise, RotateClockWise } from '../../blocks/motion';
import { FlagClicked, SpriteClicked } from '../../blocks/events';
import DraggableWrapper from './DraggableWrapper';
import { ESubTypes } from '../../blocks/types';
import { Scale } from '../../blocks/motion/Scale';
import { Wait } from '../../blocks/events/Wait';
export default function LeftSideBar() {
  return (
    <div className={styles.leftsideWrapper}>
      <div className={styles.title}>Motion</div>
      <DraggableWrapper transferProps={{ type: 'ADD_CARD', subType: ESubTypes.MOTION_MOVE }}>
        <Move.element
          steps={10}
          onChange={() => {
            //
          }}
        />
      </DraggableWrapper>
      <DraggableWrapper transferProps={{ type: 'ADD_CARD', subType: ESubTypes.MOTION_CLOCKWISE }}>
        <RotateClockWise.element
          deg={10}
          onChange={() => {
            //
          }}
        />
      </DraggableWrapper>
      <DraggableWrapper
        transferProps={{ type: 'ADD_CARD', subType: ESubTypes.MOTION_ANTICLOCKWISE }}>
        <RotateAntiClockWise.element
          deg={10}
          onChange={() => {
            //
          }}
        />
      </DraggableWrapper>
      <div className={styles.title}>Events</div>
      <DraggableWrapper transferProps={{ type: 'ADD_CARD', subType: ESubTypes.FLAG_CLICKED }}>
        <FlagClicked.element />
      </DraggableWrapper>
      <DraggableWrapper transferProps={{ type: 'ADD_CARD', subType: ESubTypes.SPRITE_CLICKED }}>
        <SpriteClicked.element />
      </DraggableWrapper>

      <div className={styles.title}>Looks</div>
      <DraggableWrapper transferProps={{ type: 'ADD_CARD', subType: ESubTypes.LOOKS_SCALE }}>
        <Scale.element
          scale={100}
          onChange={() => {
            //
          }}
        />
      </DraggableWrapper>
      <div className={styles.title}>Control</div>
      <DraggableWrapper transferProps={{ type: 'ADD_CARD', subType: ESubTypes.CONTROL_WAIT }}>
        <Wait.element
          time={1}
          onChange={() => {
            //
          }}
        />
      </DraggableWrapper>
    </div>
  );
}
