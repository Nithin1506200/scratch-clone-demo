import { useSortable } from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import { TBlockProps } from '../../blocks/types';
import BlockFactory from '../../blocks/Blocks.factory';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import scratchSlice from '@/store/scratch/scratch.slice';
import { useAppSelector } from '@/hooks/store/useAppSelector';
export function SortableItem(props: {
  id: string;
  data: TBlockProps;
  onChangeData: (id: string, data: any) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id
  });
  const currentSelectedSprite = useAppSelector((state) => state.scratch.currentSliceId);
  const dispatch = useDispatch();
  useEffect(() => {
    const trigger = (evt: KeyboardEvent) => {
      // toast(evt.key);
      if (evt.key === 'Backspace') {
        if (isFocused) {
          dispatch(
            scratchSlice.actions.deleteBlock({
              currentSprite: currentSelectedSprite || '',
              blockId: props.id
            })
          );
        }
      }
    };
    document.addEventListener('keyup', trigger);
    return () => {
      document.removeEventListener('keyup', trigger);
    };
  }, [props.id, isFocused, currentSelectedSprite]);
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,

    // border: isFocused ? '2px red solid' : 'none',
    borderRadius: '10px',
    boxShadow: isFocused ? 'var( --box-shadow-1) grey' : 'none',
    width: 'fit-content'
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}>
      <BlockFactory key={props.id} data={props.data} onChangeData={props.onChangeData} />
    </div>
  );
}
