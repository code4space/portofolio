import React, { useState, useEffect } from 'react';

const BackToBottomButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleBackToBottom = (target) => {
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset !== scrollPosition) {
        setScrollPosition(window.pageYOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div>
      <button onClick={() => handleBackToBottom('3')}>
        Scroll to Element
      </button>
      <button onClick={() => handleBackToBottom(3)}>
        Scroll to Position 500
      </button>
    </div>
  );
};

export default BackToBottomButton;
