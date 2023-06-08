import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IScratchState } from './scratch.interface';
import { ESubTypes, TBlockProps } from '@/components/scratch/blocks/types';
import { toast } from 'react-toastify';
import { arrayMove } from '@dnd-kit/sortable';
import { DragEndEvent } from '@dnd-kit/core';
import { RunBlock } from '@/components/scratch/blocks/Blocks.factory';
const initialState: IScratchState = {
  sprites: [],
  currentSliceId: undefined
};
const scratchSlice = createSlice({
  name: 'scratch',
  initialState,
  reducers: {
    setSpriteData(state, action: PayloadAction<{ id: string; data: TBlockProps[] }>) {
      state.sprites = state.sprites.map((e) => {
        if (e.id === action.payload.id) {
          e.data = action.payload.data;
        }
        return e;
      });
    },
    rearrangeSpriteData(
      state,
      action: PayloadAction<{
        currentSelectedId: string;
        active: string | number;
        over: string | number | undefined;
      }>
    ) {
      state.sprites = state.sprites.map((sprite) => {
        const { active, over } = action.payload;

        if (sprite.id === action.payload.currentSelectedId) {
          if (active !== over) {
            const activeIndex = sprite.data.findIndex((e) => {
              return e.id === active;
            });
            const overIndex = sprite.data.findIndex((e) => {
              return e.id == over;
            });
            sprite.data = arrayMove(sprite.data, activeIndex, overIndex);
          }
        }
        return sprite;
      });
    },
    addSprite(state, action: PayloadAction<{ name: string; img: string; id: string }>) {
      state.sprites.push({
        id: action.payload.id,
        name: action.payload.name,
        img: action.payload.img,
        data: []
      });
      state.currentSliceId = action.payload.id;
    },
    removeSprite(state, action: PayloadAction<{ id: string }>) {
      state.sprites = state.sprites.filter((e) => e.id !== action.payload.id);
    },
    /**
     * support for multiple slice
     */
    switchCurrentSprite(state, action: PayloadAction<{ id: string | undefined }>) {
      state.currentSliceId = action.payload.id;
    },
    onDrop(state, action: PayloadAction<{ id: string; data: TBlockProps[] }>) {
      if (action.payload.id === undefined || action.payload.id === '') {
        toast.error('choose a sprite');
      }
      state.sprites = state.sprites.map((e) => {
        if (e.id === action.payload.id) {
          e.data = e.data.concat(action.payload.data);
        }
        return e;
      });
    },
    resetData(
      state,
      action: PayloadAction<{ currentSelectedId: string; idOfBlock: string; data: any }>
    ) {
      state.sprites = state.sprites.map((e) => {
        if (e.id === action.payload.currentSelectedId) {
          e.data = e.data.map((eachBlock) => {
            if (eachBlock.id === action.payload.idOfBlock) {
              eachBlock.props = action.payload.data;
            }
            return eachBlock;
          });
        }
        return e;
      });
    },
    _event_onClickFlag(store) {
      //

      store.sprites.forEach((sprite) => {
        async function asyncLoop(props: TBlockProps[], spriteId: string) {
          let isFlagPresent = false;
          for (const eachData of props) {
            //
            if (eachData.subType === ESubTypes.FLAG_CLICKED) {
              isFlagPresent = true;
            }
            if (eachData.subType === ESubTypes.SPRITE_CLICKED && isFlagPresent) {
              break;
            }
            if (isFlagPresent) {
              await RunBlock(spriteId, eachData);
            }
          }
        }
        asyncLoop(JSON.parse(JSON.stringify(sprite.data)), sprite.id);

        // sprite.data.forEach(async (eachData) => {
        //   if (eachData.subType === ESubTypes.FLAG_CLICKED) {
        //     isFlagPresent = true;
        //   }
        //   if (isFlagPresent) {
        //     await RunBlock(sprite.id, eachData);
        //   }
        // });
      });
    },
    _event_onClickSplice(store, action: PayloadAction<{ spriteId: string }>) {
      const sprite = store.sprites.find((e) => e.id === action.payload.spriteId);
      async function asyncLoop(props: TBlockProps[], spriteId: string) {
        let isClickPresent = false;
        for (const eachData of props) {
          //
          if (eachData.subType === ESubTypes.SPRITE_CLICKED) {
            isClickPresent = true;
          }
          if (eachData.subType === ESubTypes.FLAG_CLICKED && isClickPresent) {
            break;
          }
          if (isClickPresent) {
            await RunBlock(spriteId, eachData);
          }
        }
      }

      if (sprite) {
        asyncLoop(JSON.parse(JSON.stringify(sprite.data)), sprite.id);
        // sprite.data.forEach(async (eachData) => {
        //   if (eachData.subType === ESubTypes.SPRITE_CLICKED) {
        //     isClickPresent = true;
        //   }
        //   if (isClickPresent) {
        //     await RunBlock(sprite.id, eachData);
        //   }
        // });
      }
    }
  }
});
export default scratchSlice;
