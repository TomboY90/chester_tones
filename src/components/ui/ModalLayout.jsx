import React from 'react';
import { createPortal } from 'react-dom';
import classes from './ModalLayout.module.scss';

const ModalLayout = () => {
  return createPortal(
    <div className={classes['modal-overlay']}>
      <div></div>
    </div>,
    document.getElementById('modal')
  );
};

export default ModalLayout;
