import { useSortable } from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import { TBlockProps } from '../../blocks/types';
import BlockFactory from '../../blocks/Blocks.factory';
export function SortableItem(props: {
  id: string;
  data: TBlockProps;
  onChangeData: (id: string, data: any) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <BlockFactory key={props.id} data={props.data} onChangeData={props.onChangeData} />
    </div>
  );
}
