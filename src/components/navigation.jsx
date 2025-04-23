import { useEffect, useState } from 'react';
import '../assets/css/navigation.css';
import logo_w from '../assets/W.png'

export default function Navigation({ activePage, setActivePage, isMobile }) {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const prevScrollPos = scrollPosition;

      if (prevScrollPos > currentScrollPos) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const navigationClass = (!isNavVisible && !navbar) ? 'hideNav' : ''

  const handleChangePage = (target, page) => {
    if (isMobile && navbar) setNavbar(false)
    const targetElement = document.getElementById(target);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setScrollPosition(targetPosition);
    }
    setActivePage(page)
  };

  function handleResume () {
    window.open('/resume.pdf', '_blank');
  }

  return (
    <>
      {(isMobile && navbar) ? <div className='nav-bg'></div> : ''}
      <div className={`navigation ${navigationClass}`}>
        <h2 onClick={() => window.location.reload()}> <img src={logo_w} alt="logo_w" /> {!isMobile && 'William.'}</h2>
        {isMobile ?
          <div>
            <div className='nav-container' style={navbar ? null : { maxWidth: 0 }}>
              <div onClick={() => {setNavbar(false)}} style={{position: 'absolute', width: '100%', height: '100%'}}></div>
              <div className='nav-content'>
                <ul>
                  <li onClick={() => handleChangePage('home')}>
                    Home
                  </li>
                  <li onClick={() => handleChangePage('showcase')} >Showcase</li>
                  <li onClick={() => handleChangePage('contact')} >Contact</li>
                  <li onClick={handleResume}>Resume</li>
                </ul>
              </div>
            </div>
            <div className={navbar ? 'navbar-button active-navbar' : 'navbar-button deactive-navbar'} onClick={() => setNavbar(!navbar)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          :
          <ul>
            <li onClick={() => handleChangePage('home', 1)} style={activePage === 1 ? { fontWeight: '700', color: '#f3aa4e' } : null}>
              Home
            </li>
            <li onClick={() => handleChangePage('showcase', 2)} style={activePage === 2 ? { fontWeight: '700', color: '#f3aa4e' } : null}>Showcase</li>
            <li onClick={() => handleChangePage('contact', 3)} style={activePage === 3 ? { fontWeight: '700', color: '#f3aa4e' } : null}>Contact</li>
            <li onClick={handleResume}>Resume</li>
          </ul>}
      </div></>
  );
}
