import { useDrop } from 'react-dnd';
import styles from './MiddleBar.module.scss';
import { useState } from 'react';
import { TBlockProps } from '../../blocks/types';
import BlockFactory, { BlockPropBuilder } from '../../blocks/Blocks.factory';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import { useDispatch } from 'react-redux';
import scratchSlice from '@/store/scratch/scratch.slice';
import { toast } from 'react-toastify';
export default function MiddleBar() {
  const [list, setList] = useState<TBlockProps[]>([]);
  const currectSelectedSprite = useAppSelector((state) => {
    return state.scratch.sprites.find((e) => e.id === state.scratch.currentSliceId)?.data || [];
  });
  const currentSliceId = useAppSelector((state) => state.scratch.currentSliceId);
  const dispatch = useDispatch();
  const [, drag] = useDrop(
    {
      accept: ['ADD_CARD'],
      drop: (item: any) => {
        //on drop create state using factory methos

        dispatch(
          scratchSlice.actions.onDrop({
            id: currentSliceId || '',
            data: [BlockPropBuilder(item.subType)]
          })
        );
        // setList((prev) => prev.concat([BlockPropBuilder(item.subType)]));
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
      canDrop: (item: any, monitor) => {
        return true;
      }
    },
    [currentSliceId]
  );
  function resetDataOfId(id: string, data: any) {
    dispatch(
      scratchSlice.actions.resetData({
        currentSelectedId: currentSliceId || '',
        idOfBlock: id,
        data
      })
    );
    setList((prev) => {
      return prev.map((e) => {
        if (e.id === id) {
          e.props = data;
        }
        return e;
      });
    });
  }
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    // if (active.id !== over?.id) {
    //   setList((prev) => {
    //     const activeIndex = prev.findIndex((e) => {
    //       return e.id === active.id;
    //     });
    //     const overIndex = prev.findIndex((e) => {
    //       return e.id == over?.id;
    //     });
    //     return arrayMove(prev, activeIndex, overIndex);
    //   });
    // }
    dispatch(
      scratchSlice.actions.rearrangeSpriteData({
        currentSelectedId: currentSliceId || '',
        active: active.id,
        over: over?.id
      })
    );
  }
  return (
    <div ref={drag} className={styles.MiddleWrapper}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={currectSelectedSprite} strategy={verticalListSortingStrategy}>
          {currectSelectedSprite.map((e) => {
            return <SortableItem key={e.id} data={e} onChangeData={resetDataOfId} id={e.id} />;
          })}
        </SortableContext>
      </DndContext>
    </div>
  );
}
