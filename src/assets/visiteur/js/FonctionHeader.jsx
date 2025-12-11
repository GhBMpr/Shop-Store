import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  useEffect(() => {
    const strings = ["Baby", "Child", "Junior"];
    
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed = new Typed(".typing", options);

    // Cleanup function to clear the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="typing"></div>
  );
};

export default TypingAnimation;

