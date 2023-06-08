import { useDrag } from 'react-dnd';
import { ESubTypes, IAllBlocks } from '../../blocks/types';

export default function DraggableWrapper(props: {
  transferProps: { type: 'ADD_CARD'; subType: ESubTypes };
  children: JSX.Element;
}) {
  const [, drag] = useDrag({
    item: {
      ...props.transferProps
    },
    type: props.transferProps.type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging
    })
  });
  return <div ref={drag}>{props.children}</div>;
}
