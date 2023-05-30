import React, { useEffect, useState } from 'react';
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

  const handleDivRef = (divHeight) => {
    console.log('Received div height:', divHeight);
  };

  return (
    <div className='container'>
      {showWelcomePage ?
        <WelcomPage /> :
        <>
          <Navigation />
          <IntroductionPage />
          <ProjectPage onDivRef={handleDivRef}/>
          <ContactPage />
        </>
      }
    </div>
  );
};

export default App;