import { useEffect, useState } from 'react';

// The is a React custom hook, I wrote it to serve as a reusable current time update for all animals
export const useZooTime = () => {
  const [time, setTime] = useState(new Date());
  // This useEffect hook is to continually update the current time of the zoo
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return time;
};

export default useZooTime;
