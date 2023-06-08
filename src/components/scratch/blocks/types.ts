import { IWaitPropsData } from './events/Wait';
import { IMovePropsData } from './motion/Move';
import { IRotateAntiClockPropsData } from './motion/RotateAntiClockWise';
import { IRotateClockPropsData } from './motion/RotateClockWise';
import { IScalePropsData } from './motion/Scale';

export type TBlockType = 'MOTION' | 'EVENTS' | 'LOOKS' | 'CONTROL';
export interface IBlocks<Props = any, RunData = any> {
  element: (props: Props) => JSX.Element;
  subType: ESubTypes;
  type: TBlockType;
  run?: (id: string, data: RunData) => Promise<any>;
}

export interface IAllBlocks {
  type: TBlockType;
  subType: ESubTypes;
}

export enum ESubTypes {
  FLAG_CLICKED = 'FLAG_CLICKED',
  MOTION_MOVE = 'MOTION_MOVE',
  MOTION_CLOCKWISE = 'MOTION_CLOCKWISE',
  SPRITE_CLICKED = 'SPRITE_CLICKED',
  MOTION_ANTICLOCKWISE = 'MOTION_ANTICLOCKWISE',
  LOOKS_SCALE = 'LOOKS_SCALE',
  CONTROL_WAIT = 'CONTROL_WAIT'
}
export type TBlockProps =
  | {
      id: string;
      subType: ESubTypes.MOTION_MOVE;
      props: IMovePropsData;
    }
  | {
      id: string;
      subType: ESubTypes.FLAG_CLICKED;
      props: undefined;
    }
  | {
      id: string;
      subType: ESubTypes.SPRITE_CLICKED;
      props: undefined;
    }
  | {
      id: string;
      subType: ESubTypes.MOTION_CLOCKWISE;
      props: IRotateClockPropsData;
    }
  | {
      id: string;
      subType: ESubTypes.MOTION_ANTICLOCKWISE;
      props: IRotateAntiClockPropsData;
    }
  | {
      id: string;
      subType: ESubTypes.LOOKS_SCALE;
      props: IScalePropsData;
    }
  | {
      id: string;
      subType: ESubTypes.CONTROL_WAIT;
      props: IWaitPropsData;
    };
