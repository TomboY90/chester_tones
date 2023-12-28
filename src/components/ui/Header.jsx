import classes from './Header.module.scss';
import { navList } from '../../router/NavList.js';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import useThrottle from '../../hooks/useThrottle.jsx';
import useDebounce from '../../hooks/useDebounce.jsx';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useLink from '../../hooks/useLink.jsx';

const MobileSub = ({ nav, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const moveLocation = (path, state) => {
    navigate(path, { state });
    onClose();
  };

  return (
    <li
      style={isOpen ? { maxHeight: `${(nav.children.length + 1) * 56}px` } : { maxHeight: '56px' }}
      onClick={() => {
        setIsOpen(!isOpen);
      }}>
      <div className={`${classes['main-nav']} ${isOpen ? classes.active : ''}`}>
        <p>{nav.title}</p>
        <div className={`${classes['plus-button']}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={classes['sub-mobile-nav']}>
        {nav.children.map((sub, index) => (
          <li
            key={index}
            onClick={() => moveLocation(sub.path, sub.state)}
            className={
              location.pathname.includes('/rooms')
                ? sub.path.includes('/rooms') && index === Number(id)
                  ? classes.active
                  : ''
                : location.pathname.includes(sub.path) && location.state === sub.state
                  ? classes.active
                  : ''
            }>
            {sub.title}
          </li>
        ))}
      </ul>
    </li>
  );
};

const Header = () => {
  const [status, setStatus] = useState(0); //0 => 기본, 1 => 흰색, 2 => 히든
  const [prevY, setPrevY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isMobileNav, setIsMobileNav] = useState(false);

  const linkTo = useLink();

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const debounceHandler = useDebounce(() => {
    if (prevY === 0) {
      if (location.pathname.includes('/terms')) {
        setStatus(1);
      } else {
        setStatus(0);
      }
    } else {
      setStatus(1);
    }
  }, 1000);

  useEffect(() => {
    if (isMobileNav) {
      setOffsetY(window.scrollY);
      console.log(window.scrollY);
      document.body.style.cssText = `
      position: fixed; 
      overflow-y: scroll;
      width: 100%;`;
    } else {
      document.body.style.cssText = '';
      window.scrollTo({ left: 0, top: offsetY });
    }
  }, [isMobileNav]);
  const handleScroll = () => {
    const moving = window.pageYOffset;

    if (prevY === 0) {
      setStatus(0);
    } else if (prevY > moving) {
      setStatus(1);
      debounceHandler;
    } else {
      setStatus(2);
    }
    setPrevY(moving);
  };

  const throttleHandler = useThrottle(handleScroll, 100);

  const scrollDetectHandler = useCallback(() => {
    throttleHandler();
  }, [prevY]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', scrollDetectHandler);
    return () => {
      window.removeEventListener('scroll', scrollDetectHandler);
    };
  }, [prevY]);

  const headerClass = () => {
    switch (status) {
      case 0:
        return '';
      case 1:
        return classes.active;
      case 2:
        return classes.hidden;
    }
  };

  return (
    <>
      <header className={`${classes.header} ${headerClass()}`}>
        <>
          <ul className={`${classes['nav-ul']}`}>
            {navList.map((nav, index) => (
              <li key={index}>
                <p onClick={() => nav.path && navigate(nav.path)}>{nav.title}</p>
                <ul
                  className={classes['sub-nav']}
                  style={
                    location.pathname.includes('/rooms') && status !== 0 && index === 1
                      ? { transform: 'scaleY(1)' }
                      : {}
                  }>
                  {nav.children.map((sub, index) => (
                    <li
                      key={index}
                      onClick={() => navigate(sub.path, { state: sub.state })}
                      className={
                        location.pathname.includes('/rooms')
                          ? sub.path.includes('/rooms') && index === Number(id)
                            ? classes.active
                            : ''
                          : location.pathname.includes(sub.path) && location.state === sub.state
                            ? classes.active
                            : ''
                      }>
                      {sub.title}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h1 onClick={() => navigate('/')}></h1>
          <ul className={`${classes['nav-ul']} ${classes.login}`}>
            {/*<li>*/}
            {/*  <p>로그인</p>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <p>회원가입</p>*/}
            {/*</li>*/}
            <li>
              <button className={classes['reservation-button']} onClick={linkTo}>
                RESERVATION
              </button>
            </li>
          </ul>
        </>
      </header>
      <header className={`${classes['mobile-header']} ${classes.active}`}>
        <div className={classes['logo-wrapper']}>
          <div
            className={`${classes.hamburger} ${isMobileNav ? classes.active : ''}`}
            onClick={() => setIsMobileNav(!isMobileNav)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1
            onClick={() => {
              navigate('/');
              setIsMobileNav(false);
            }}></h1>
        </div>
        <button className={classes['reservation-button']} onClick={linkTo}>
          RESERVATION
        </button>

        <div className={`${classes['mobile-nav']} ${isMobileNav ? classes.active : ''}`}>
          <ul>
            {navList.map((nav, index) => (
              <MobileSub nav={nav} key={index} onClose={() => setIsMobileNav(false)} />
            ))}
          </ul>
          <button className={classes['reservation-button']} onClick={linkTo}>
            RESERVATION
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
