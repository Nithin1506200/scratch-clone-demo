import Block_1 from '../generic/block_1/Block_1';
import { IBlocks } from '../types';

export type TMove = 'MOTION_MOVE';
interface props {
  setSteps?: (e: number) => void;
  steps: number;
}
export type TMoveProps = { type: TMove; props: props };
const Move_element = (props: props) => {
  return (
    <Block_1 backgroundColor="var(--primary-blue)">
      <span>Move</span>
      <input
        type="number"
        value={props.steps || 10}
        onChange={(e) => {
          props?.setSteps && props?.setSteps(parseInt(e.target.value));
        }}
      />
      <span>steps</span>
    </Block_1>
  );
};
const Move: IBlocks<props, TMove> = {
  element: Move_element,
  subType: 'MOTION_MOVE',
  type: 'MOTION'
};
export { Move };
