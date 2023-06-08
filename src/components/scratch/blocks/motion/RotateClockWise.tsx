import { roateClockWiseSvg } from '@/assets/generic';
import { transformManipulation } from '.';
import Block_1 from '../generic/block_1/Block_1';
import { ESubTypes, IBlocks } from '../types';

export interface IRotateClockPropsData {
  deg: number;
}
interface props extends IRotateClockPropsData {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IRotateClockPropsData) => void;
}

export type TMoveProps = {
  type: ESubTypes.MOTION_MOVE;
  props: props & { onChange: () => IRotateClockPropsData };
};
const RotateClockwise_element = (props: props) => {
  return (
    <Block_1 backgroundColor="var(--primary-blue)">
      <span>Rotate</span>
      <img src={roateClockWiseSvg} alt="clockWise" style={{ width: '15px' }} />
      <input
        type="number"
        value={props.deg || 10}
        onChange={(e) => {
          props.onChange && props?.onChange({ deg: parseInt(e.target.value) });
        }}
      />
      <span>deg </span>
    </Block_1>
  );
};
const RotateClockWise: IBlocks<props, IRotateClockPropsData> = {
  element: RotateClockwise_element,
  subType: ESubTypes.MOTION_CLOCKWISE,
  type: 'MOTION',
  run(spriteId, data) {
    const promise = new Promise((resolve, reject) => {
      resolve(transformManipulation(spriteId, { RotateZ: data.deg }));
    });
    return promise;
  }
};
export { RotateClockWise };
