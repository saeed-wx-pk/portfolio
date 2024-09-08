'use client';
import { useState, useEffect } from 'react';

const LiveTime: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    updateTime(); // Set the initial time immediately
    const timerId = setInterval(updateTime, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString([], options);
  };

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className='mt-3 md:ml-0 ml-5'>
      <p className='text-xs tracking-widest'>Local Time in Delhi, Chennai</p>
      <h2>{time ? formatDate(time) : 'Loading...'}</h2>
      <h2>{time ? formatTime(time) : 'Loading...'}</h2>
    </div>
  );
};

export default LiveTime;


