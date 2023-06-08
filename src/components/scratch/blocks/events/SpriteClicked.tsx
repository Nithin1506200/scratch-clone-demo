import Block_1 from '../generic/block_1/Block_1';
import { ESubTypes, IBlocks } from '../types';
export type TFlagClicked = 'FLAG_CLICKED';

const SpriteClicked_component = () => {
  return (
    <>
      <Block_1 backgroundColor="var(--yello-500)">
        <span> When sprite Clicked</span>
      </Block_1>
    </>
  );
};
const SpriteClicked: IBlocks<any> = {
  element: SpriteClicked_component,
  subType: ESubTypes.SPRITE_CLICKED,
  type: 'EVENTS'
};
export { SpriteClicked };
