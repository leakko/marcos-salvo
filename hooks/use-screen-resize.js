import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  const [debounced, setDebounced] = useState(true);

  useEffect(() => {
    if (debounced) {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setDebounced(false);
      setTimeout(() => {
        setDebounced(true);
      }, 1000);
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [debounced]);

  return screenSize;
};

export default useScreenSize;
