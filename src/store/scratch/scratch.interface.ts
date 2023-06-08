import { TBlockProps } from '@/components/scratch/blocks/types';

export type TBlockData = { id: string; name: string; data: TBlockProps[]; img: string };
export interface IScratchState {
  sprites: TBlockData[];
  currentSliceId?: string;
}
