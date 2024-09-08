// components/TypedText.js
'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AnimaText = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Programmer.", "Designer.", "Developer."],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true
    };

    if (el.current) {
      const typed = new Typed(el.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <h2>Hi I am a <span ref={el} className='text-cyan-400' ></span></h2>;
};

export default AnimaText;
