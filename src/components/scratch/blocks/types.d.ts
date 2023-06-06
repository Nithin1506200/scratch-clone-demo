import { TFlagClicked } from './events/FlagClicked';
import { TMove } from './motion/Move';

export type TBlockType = 'MOTION' | 'EVENTS';
export interface IBlocks<Props = any, Ttype> {
  element: (props: Props) => JSX.Element;
  subType: Ttype;
  type: TBlockType;
}

export interface IAllBlocks {
  type: TBlockType;
  subType: TMove | TFlagClicked;
}
