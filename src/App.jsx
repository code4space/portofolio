import React, { useEffect, useState, useRef } from 'react';
import IntroductionPage from './pages/introduction.jsx';
import Navigation from './components/navigation.jsx';
import WelcomPage from './pages/welcome.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectPage from './pages/projects.jsx';
import ContactPage from './pages/contact.jsx';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const [showWelcomePage, setShowWelcomePage] = useState(true);
  useEffect(() => {
    // Hide the welcome page after 3 seconds
    const timeout = setTimeout(() => {
      setShowWelcomePage(false);
    }, 4000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='container'>
      {showWelcomePage ?
        <WelcomPage /> :
        <>
          <div className='light-container'>
            <div className='light' ref={lightRef}></div>
          </div>
          <Navigation/>
          <IntroductionPage />
          <ProjectPage/>
          <ContactPage />
        </>
      }
    </div>
  );
};

export default App;