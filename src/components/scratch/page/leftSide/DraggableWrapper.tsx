import { useDrag } from 'react-dnd';
import { IAllBlocks, IBlocks } from '../../blocks/types';

export default function DraggableWrapper(props: {
  transferProps: IAllBlocks;
  children: JSX.Element;
}) {
  const [{ isDragging }, drag] = useDrag({
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
