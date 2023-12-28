import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useIntersect = (onIntersect, option) => {
  const target = useRef();
  const [isView, setIsView] = useState(false);

  const checkIntersect = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      onIntersect(entry, observer);
      setIsView(true);
    } else {
      setIsView(false);
    }
  }, []);

  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(checkIntersect, {
        ...option,
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, option?.root, option?.threshold, option?.rootMargin, checkIntersect]);

  return [target, isView];
};

export default useIntersect;
