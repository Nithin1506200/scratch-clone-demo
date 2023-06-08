import Block_1 from '../generic/block_1/Block_1';
import { ESubTypes, IBlocks } from '../types';

export interface IWaitPropsData {
  time: number;
}
interface props extends IWaitPropsData {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IWaitPropsData) => void;
}

export type TWaitProps = {
  type: ESubTypes.MOTION_MOVE;
  props: props & { onChange: () => IWaitPropsData };
};
const Wait_element = (props: props) => {
  return (
    <Block_1 backgroundColor="var(--orange)">
      <span>Wait</span>
      <input
        type="number"
        value={props.time || 1}
        onChange={(e) => {
          props.onChange && props?.onChange({ time: parseInt(e.target.value) });
        }}
      />
      <span>Second</span>
    </Block_1>
  );
};
const Wait: IBlocks<props, IWaitPropsData> = {
  element: Wait_element,
  subType: ESubTypes.CONTROL_WAIT,
  type: 'CONTROL',
  run(spriteId, data) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(undefined);
      }, data.time * 1000);
    });
    return promise;
  }
};
export { Wait };
