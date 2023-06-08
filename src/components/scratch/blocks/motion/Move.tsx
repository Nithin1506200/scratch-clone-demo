import { transformManipulation } from '.';
import Block_1 from '../generic/block_1/Block_1';
import { ESubTypes, IBlocks } from '../types';

export interface IMovePropsData {
  steps: number;
}
interface props extends IMovePropsData {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IMovePropsData) => void;
}

export type TMoveProps = {
  type: ESubTypes.MOTION_MOVE;
  props: props & { onChange: () => IMovePropsData };
};
const Move_element = (props: props) => {
  return (
    <Block_1 backgroundColor="var(--primary-blue)">
      <span>Move</span>
      <input
        type="number"
        value={props.steps || 10}
        onChange={(e) => {
          props.onChange && props?.onChange({ steps: parseInt(e.target.value) });
        }}
      />
      <span>steps</span>
    </Block_1>
  );
};
const Move: IBlocks<props, IMovePropsData> = {
  element: Move_element,
  subType: ESubTypes.MOTION_MOVE,
  type: 'MOTION',
  run(spriteId, data) {
    const promise = new Promise((resolve, reject) => {
      resolve(transformManipulation(spriteId, { IncPosX: data.steps }));
    });
    return promise;
  }
};
export { Move };
