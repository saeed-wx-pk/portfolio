'use client'
import React, { useEffect, useRef, useState } from 'react';

interface CircleBarProps {
  percent: number;
  title: string;
}

const CircleBar = ({ percent, title }: CircleBarProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const [counter, setCounter] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const circumference = 219.91; // Circumference of the circle
    const strokeDashoffset = circumference - (circumference * percent) / 100;

    const handleScroll = () => {
      if (hasAnimated) return; // Prevent animation from running more than once

      const rect = circleRef.current?.getBoundingClientRect();
      
      // Ensure rect is defined before proceeding
      if (rect && rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setHasAnimated(true); // Set the flag to indicate the animation has run

        // Start the circle animation
        circleRef.current!.style.strokeDashoffset = `${strokeDashoffset}`;
        circleRef.current!.classList.add('active');

        // Start the counter animation
        let startValue = 0;
        const increment = percent / 50; // Adjust the divisor for speed
        const interval = setInterval(() => {
          startValue += increment;
          if (startValue >= percent) {
            setCounter(percent);
            clearInterval(interval);
          } else {
            setCounter(Math.ceil(startValue));
          }
        }, 60); // Adjust the interval speed (milliseconds)
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [percent, hasAnimated]);

  return (
    <div className="mt-5">
      <div className="relative h-[80px] w-[80px]">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80px" height="80px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="40"
            cy="40"
            r="35"
            strokeLinecap="round"
            className="animate-on-scroll"
            ref={circleRef}
            style={{
              strokeDasharray: 219.91,
              strokeDashoffset: 219.91,
              stroke: 'url(#GradientColor)', // Apply the gradient to the stroke
              strokeWidth: '10px', // Adjust stroke width if needed
              transition: 'stroke-dashoffset 3s linear',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div>{counter}%</div>
        </div>
      </div>
      <div className="flex justify-center mt-3 min-w-fit">{title}</div>
    </div>
  );
};

export default CircleBar;
