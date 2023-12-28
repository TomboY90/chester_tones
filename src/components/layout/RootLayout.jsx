import { Outlet, useLocation } from 'react-router-dom';
import Header from '@components/ui/Header.jsx';
import Footer from '@components/ui/Footer.jsx';
import { useEffect } from 'react';

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // const setScreenHeight = () => {
  //   const vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // };
  //
  // useEffect(() => {
  //   setScreenHeight();
  //   // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
  //   window.addEventListener('resize', setScreenHeight);
  //   return () => window.removeEventListener('resize', setScreenHeight);
  // }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

export default RootLayout;
