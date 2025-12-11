import React, { useEffect } from 'react';
import Typed from 'typed.js';

const ClientAnimation = () => {
  useEffect(() => {
    const strings = ["Be our client,"];
    
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed = new Typed(".typing-5", options);

    // Cleanup function to clear the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="typing-5"></div>
  );
};

export default ClientAnimation;

