import { useEffect, useState } from 'react';

export const useZooTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return time;
};

export default useZooTime;
