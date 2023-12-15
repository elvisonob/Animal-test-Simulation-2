import { useEffect } from 'react';
export const useElapsedOneHour = (animal, onTimeReduce) => {
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
