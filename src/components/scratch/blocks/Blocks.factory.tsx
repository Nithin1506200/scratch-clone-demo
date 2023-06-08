import { v4 } from 'uuid';
import { FlagClicked, SpriteClicked } from './events';
import { Move, RotateAntiClockWise, RotateClockWise } from './motion';
import { ESubTypes, TBlockProps } from './types';
import { Scale } from './motion/Scale';
import { Wait } from './events/Wait';

/**
 * this is to build and render differents blocks
 * @param props
 * @returns
 */
export default function BlockFactory(props: {
  data: TBlockProps;
  onChangeData: (id: string, data: any) => void;
}) {
  switch (props.data.subType) {
    case ESubTypes.MOTION_MOVE: {
      return (
        <Move.element
          steps={props.data.props.steps}
          onChange={(e) => {
            props.onChangeData(props.data.id, e);
          }}></Move.element>
      );
    }
    case ESubTypes.MOTION_CLOCKWISE: {
      return (
        <RotateClockWise.element
          deg={props.data.props.deg}
          onChange={(e) => {
            props.onChangeData(props.data.id, e);
          }}
        />
      );
    }
    case ESubTypes.MOTION_ANTICLOCKWISE: {
      return (
        <RotateAntiClockWise.element
          deg={props.data.props.deg}
          onChange={(e) => {
            props.onChangeData(props.data.id, e);
          }}
        />
      );
    }
    case ESubTypes.LOOKS_SCALE: {
      return (
        <Scale.element
          scale={props.data.props.scale}
          onChange={(e) => {
            props.onChangeData(props.data.id, e);
          }}
        />
      );
    }
    case ESubTypes.FLAG_CLICKED: {
      return <FlagClicked.element />;
    }
    case ESubTypes.SPRITE_CLICKED: {
      return <SpriteClicked.element />;
    }
    case ESubTypes.CONTROL_WAIT: {
      return (
        <Wait.element
          time={props.data.props.time}
          onChange={(e) => {
            props.onChangeData(props.data.id, e);
          }}
        />
      );
    }
  }
}
/**
 * generate initial props for given subtype
 * @param subType
 * @returns
 */
export function BlockPropBuilder(subType: ESubTypes): TBlockProps {
  switch (subType) {
    case ESubTypes.MOTION_MOVE: {
      return { id: v4(), subType: ESubTypes.MOTION_MOVE, props: { steps: 10 } };
    }
    case ESubTypes.FLAG_CLICKED: {
      return { id: v4(), subType: ESubTypes.FLAG_CLICKED, props: undefined };
    }
    case ESubTypes.SPRITE_CLICKED: {
      return { id: v4(), subType: ESubTypes.SPRITE_CLICKED, props: undefined };
    }

    case ESubTypes.MOTION_ANTICLOCKWISE: {
      return { id: v4(), subType: ESubTypes.MOTION_ANTICLOCKWISE, props: { deg: 10 } };
    }
    case ESubTypes.MOTION_CLOCKWISE: {
      return { id: v4(), subType: ESubTypes.MOTION_CLOCKWISE, props: { deg: 10 } };
    }
    case ESubTypes.LOOKS_SCALE: {
      return { id: v4(), subType: ESubTypes.LOOKS_SCALE, props: { scale: 100 } };
    }
    case ESubTypes.CONTROL_WAIT: {
      return { id: v4(), subType: ESubTypes.CONTROL_WAIT, props: { time: 1 } };
    }
    default: {
      throw Error;
    }
  }
}

export async function RunBlock(spriteId: string, data: TBlockProps) {
  switch (data.subType) {
    case ESubTypes.MOTION_MOVE: {
      if (Move.run) {
        return Move.run(spriteId, { steps: data.props.steps });
      }
      break;
    }
    case ESubTypes.MOTION_CLOCKWISE: {
      if (RotateClockWise.run) {
        return RotateClockWise.run(spriteId, { deg: data.props.deg });
      }
      break;
    }
    case ESubTypes.LOOKS_SCALE: {
      if (Scale.run) {
        return Scale.run(spriteId, { scale: data.props.scale });
      }
      break;
    }
    case ESubTypes.MOTION_ANTICLOCKWISE: {
      if (RotateAntiClockWise.run) {
        return RotateAntiClockWise.run(spriteId, { deg: data.props.deg });
      }
      break;
    }
    case ESubTypes.CONTROL_WAIT: {
      if (Wait.run) {
        return Wait.run(spriteId, { time: data.props.time });
      }
    }
  }
}
