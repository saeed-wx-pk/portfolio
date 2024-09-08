'use client';  // This file is client-side

import { useEffect } from 'react';

const ClientSideScripts = () => {
  useEffect(() => {
    // Scroll restoration
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    
    // IntersectionObserver for animations
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');  // Add class when in view
          observer.unobserve(entry.target);  // Unobserve after first intersection
        }
      });
    });

    document.querySelectorAll('.animate-on-view').forEach(element => {
      observer.observe(element);
    });
  }, []);

  return null;  // No rendering needed
};

export default ClientSideScripts;
