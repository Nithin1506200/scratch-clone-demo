import { roateAntiClockWiseSvg } from '@/assets/generic';
import { transformManipulation } from '.';
import Block_1 from '../generic/block_1/Block_1';
import { ESubTypes, IBlocks } from '../types';

export interface IRotateAntiClockPropsData {
  deg: number;
}
interface props extends IRotateAntiClockPropsData {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IRotateAntiClockPropsData) => void;
}

export type TMoveProps = {
  type: ESubTypes.MOTION_ANTICLOCKWISE;
  props: props & { onChange: () => IRotateAntiClockPropsData };
};
const RotateAntiClockwise_element = (props: props) => {
  return (
    <Block_1 backgroundColor="var(--primary-blue)">
      <span>Rotate</span>
      <img src={roateAntiClockWiseSvg} alt="anti clockWise" style={{ width: '15px' }} />
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
const RotateAntiClockWise: IBlocks<props, IRotateAntiClockPropsData> = {
  element: RotateAntiClockwise_element,
  subType: ESubTypes.MOTION_ANTICLOCKWISE,
  type: 'MOTION',
  run(spriteId, data) {
    const promise = new Promise((resolve, reject) => {
      resolve(transformManipulation(spriteId, { RotateZ: -data.deg }));
    });
    return promise;
  }
};
export { RotateAntiClockWise };
