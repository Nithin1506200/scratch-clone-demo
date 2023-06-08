import React from 'react';

import styles from './Block_1.module.scss';
import { IBlock_1_props } from './types';
const Block_1_: React.FC<IBlock_1_props> = (props) => {
  return (
    <span className={styles.block_1} style={{ backgroundColor: props.backgroundColor }}>
      {props.children}
    </span>
  );
};
const Block_1 = React.memo(Block_1_);
export default Block_1;
