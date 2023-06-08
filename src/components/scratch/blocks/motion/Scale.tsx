import { transformManipulation } from '.';
import Block_1 from '../generic/block_1/Block_1';
import { ESubTypes, IBlocks } from '../types';

export interface IScalePropsData {
  scale: number;
}
interface props extends IScalePropsData {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IScalePropsData) => void;
}

export type TScaleProps = {
  type: ESubTypes.MOTION_MOVE;
  props: props & { onChange: () => IScalePropsData };
};
const Scale_element = (props: props) => {
  return (
    <Block_1 backgroundColor="var(--primary-purple)">
      <span>scale</span>
      <input
        type="number"
        value={props.scale || 100}
        onChange={(e) => {
          props.onChange && props?.onChange({ scale: parseInt(e.target.value) });
        }}
      />
      <span>%</span>
    </Block_1>
  );
};
const Scale: IBlocks<props, IScalePropsData> = {
  element: Scale_element,
  subType: ESubTypes.LOOKS_SCALE,
  type: 'LOOKS',
  run(spriteId, data) {
    const promise = new Promise((resolve, reject) => {
      resolve(transformManipulation(spriteId, { Scale: data.scale / 100 }));
    });
    return promise;
  }
};
export { Scale };
