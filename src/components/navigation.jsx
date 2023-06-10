import { useEffect, useState } from 'react';
import '../assets/css/navigation.css';
import logo_w from '../assets/w.png'

export default function Navigation() {
  const [activePage, setActivePage] = useState(1);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const prevScrollPos = scrollPosition;

      if (prevScrollPos > currentScrollPos) {
        setIsNavVisible(true); // Scrolling upwards
      } else {
        setIsNavVisible(false); // Scrolling downwards
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const viewportHeight1 = window.innerHeight;
      const viewportHeight2 = window.innerHeight;

      if (scrollHeight < viewportHeight1) setActivePage(1);
      else if (scrollHeight < viewportHeight2-100) setActivePage(2);
      else setActivePage(3)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationClass = isNavVisible ? '' : 'hideNav';

  const handleChangePage = (target) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setScrollPosition(targetPosition);
    }
  };

  return (
    <div className={`navigation ${navigationClass}`}>
      <h2 onClick={() => window.location.reload()}><img src={logo_w} /> William</h2>
      <ul>
        <li onClick={() => handleChangePage('home')} style={activePage === 1 ? { fontWeight: '700', color: '#f3aa4e' } : null}>
          Home
        </li>
        <li onClick={() => handleChangePage('work')} style={activePage === 2 ? { fontWeight: '700', color: '#f3aa4e' } : null}>Work</li>
        <li onClick={() => handleChangePage('contact')} style={activePage === 3 ? { fontWeight: '700', color: '#f3aa4e' } : null}>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}
