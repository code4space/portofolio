import React from 'react';
import BackToBottomButton from './components/backToPage.jsx';
import IntroductionPage from './pages/introduction.jsx';
import Navigation from './components/navigation.jsx';

const App = () => {
  return (
    <>
      <Navigation />
      <IntroductionPage />
      <div style={{}} className="page"></div>
    </>
  );
};

export default App;