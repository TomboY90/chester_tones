import { Outlet, useLocation } from 'react-router-dom';
import Header from '@components/ui/Header.jsx';
import Footer from '@components/ui/Footer.jsx';
import { useEffect, useRef, useState } from 'react';
import KaKaoButton from '@components/ui/KaKaoButton.jsx';
import useIntersect from '../../hooks/useIntersect.jsx';

const RootLayout = () => {
  const location = useLocation();

  const [target, isView] = useIntersect(() => {}, { rootMargin: '2px', threshold: 0.1 });

  const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <>
      <Header />
      <main style={{ position: 'relative' }}>
        <Outlet />
        {/*<KaKaoButton stop={isView} />*/}
      </main>
      <Footer ref={target} />
    </>
  );
};

export default RootLayout;
