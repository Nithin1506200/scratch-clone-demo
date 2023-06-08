import { toast } from 'react-toastify';
import { Move } from './Move';
import { RotateClockWise } from './RotateClockWise';
import { RotateAntiClockWise } from './RotateAntiClockWise';

export { Move, RotateClockWise, RotateAntiClockWise };

export function transformManipulation(
  spriteId: string,
  translate: {
    IncPosX?: number;
    IncPosY?: number;
    RotateZ?: number;
    Scale?: number;
  }
) {
  const htmlEle = document.getElementById('render-' + spriteId);
  const renderer = document.getElementById('sprite_renderer');
  if (htmlEle && renderer) {
    const transform = htmlEle.style.transform;
    let translateX =
      parseInt(transform.match(/translateX\((-?\d+)px\)/i)?.[1] || '0') + (translate.IncPosX || 0);
    let translateY =
      parseInt(transform.match(/translateY\((-?\d+)px\)/i)?.[1] || '0') + (translate.IncPosY || 0);
    const rotateY =
      parseInt(transform.match(/rotateZ\((-?\d+)deg\)/i)?.[1] || '0') + (translate.RotateZ || 0);
    const scale = translate.Scale || 1;
    // constrains
    const boundingBox = renderer.getBoundingClientRect();

    translateX = Math.min(Math.max(translateX, 0), boundingBox.width - 10);
    translateY = Math.min(Math.max(translateY, 0), boundingBox.height - 30);
    htmlEle.style.transform = `rotateZ(${rotateY}deg) scale(${scale}) translateX(${translateX}px) translateY(${translateY}px) `;
  } else {
    toast.error('something went wrong');
  }
}
