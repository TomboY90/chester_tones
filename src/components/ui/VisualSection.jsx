import React, { forwardRef } from 'react';
import classes from './VisualSection.module.scss';

const VisualSection = forwardRef(({ img, children, className }, ref) => {
  return (
    <section className={`${classes.visual} ${classes[className]}`} ref={ref}>
      <img src={img} alt="" className={classes['bg-img']} />
      <span className={classes['bg-after']}></span>
      {children}
      <div className={classes['scroll-down']}>
        <p>SCROLL DOWN</p>
      </div>
    </section>
  );
});
VisualSection.displayName = 'VisualSection';

export default VisualSection;
