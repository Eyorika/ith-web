
"use client"

import React, { useEffect } from 'react';

const ImageProtection = () => {
  useEffect(() => {
    const preventDefault = (e: Event) => {
      e.preventDefault();
    };

    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', preventDefault);
    document.addEventListener('drop', preventDefault);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', preventDefault);
      document.removeEventListener('drop', preventDefault);
    };
  }, []);

  return null;
};

export default ImageProtection;
