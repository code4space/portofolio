import React, { useEffect, useState, useRef } from 'react';
import IntroductionPage from './pages/introduction.jsx';
import Navigation from './components/navigation.jsx';
import WelcomPage from './pages/welcome.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectPage from './pages/projects.jsx';
import ContactPage from './pages/contact.jsx';

const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    AOS.init();

    const timeout = setTimeout(() => {
      setShowWelcomePage(false);
    }, 2200);

    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768; // Set the breakpoint for mobile devices

      setIsMobile(isMobileDevice);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeout);
    };
  }, []);

  const lightRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const light = lightRef.current;
      if (light) {
        const x = event.clientX;
        const y = event.clientY;
        light.style.left = `${x - 350}px`;
        light.style.top = `${y - 350}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    const container = document.querySelector('.container');
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

    const handleScroll = () => {
    const container = document.querySelector('.container');
    container.style.scrollbarWidth = '';
  };

  return (
    <div className='container'>
      {showWelcomePage ?
        <WelcomPage /> :
        <>
          {!isMobile && <div className='light-container'>
            <div className='light' ref={lightRef}></div>
          </div>}
          <Navigation activePage={activePage} setActivePage={setActivePage} isMobile={isMobile}/>
          <IntroductionPage setActivePage={setActivePage}/>
          <ProjectPage setActivePage={setActivePage} isMobile={isMobile}/>
          <ContactPage setActivePage={setActivePage}/>
        </>
      }
    </div>
  );
};

export default App;