import React, { useEffect } from 'react';
import useIntersect from '../../hooks/useIntersect.jsx';

const IntersectLayout = ({ isView, id, targetRef, children, className }) => {
  const [target] = useIntersect(
    () => {
      isView(id);
    },
    { rootMargin: '2px', threshold: 0.5 }
  );

  useEffect(() => {
    if (target.current === null) {
      return;
    }
    targetRef(id, target);
  }, [target]);

  return (
    <section ref={target} className={className}>
      {children}
    </section>
  );
};

export default IntersectLayout;
