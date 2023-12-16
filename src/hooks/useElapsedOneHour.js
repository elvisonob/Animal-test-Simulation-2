import { useEffect } from 'react';

// The is a React custom hook, I wrote it and included parameters in order to make it resuable for all animals
export const useElapsedOneHour = (animal, onTimeReduce) => {
  // I used a useEffect hook to continually upate the UI when an hour has elapsed
  useEffect(() => {
    const startTime = new Date().getTime();

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= 3600000) {
        onTimeReduce();
        clearInterval(intervalId);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [animal]);
};

export default useElapsedOneHour;
