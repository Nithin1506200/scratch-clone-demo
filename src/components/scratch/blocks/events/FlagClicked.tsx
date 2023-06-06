import Block_1 from '../generic/block_1/Block_1';
import { IBlocks } from '../types';
export type TFlagClicked = 'FLAG_CLICKED';

const FlagClicked_component = () => {
  return (
    <>
      <Block_1 backgroundColor="var(--yello-500)">
        <span> When flag Clicked</span>
      </Block_1>
    </>
  );
};
const FlagClicked: IBlocks<any, TFlagClicked> = {
  element: FlagClicked_component,
  subType: 'FLAG_CLICKED',
  type: 'EVENTS'
};
export { FlagClicked };
