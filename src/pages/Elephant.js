import React, { useState, useEffect } from 'react';
import classes from './../index.module.css';
import smilingElephant from './../components/Images/smiling elephant.jpg';
import elephantCantWalk from './../components/Images/elephant cant walk.jpg';
import { useElapsedOneHour } from './../hooks/useElapsedOneHour';
import { useZooTime } from './../hooks/useZooTime';
const elephantList = [
  {
    id: 'e1',
    name: 'Elephant-1',
    image: smilingElephant,
    health: 100,
    status: 'Alive and can walk',
  },

  {
    id: 'e2',
    name: 'Elephant-2',
    image: smilingElephant,
    health: 100,
    status: 'Alive and can walk',
  },

  {
    id: 'e3',
    name: 'Elephant-3',
    image: smilingElephant,
    health: 100,
    status: 'Alive and can walk',
  },

  {
    id: 'e4',
    name: 'Elephant-4',
    image: smilingElephant,
    health: 100,
    status: 'Alive and can walk',
  },
  {
    id: 'e5',
    name: 'Elephant-5',
    image: smilingElephant,
    health: 100,
    status: 'Alive and can walk',
  },
];

const Elephant = () => {
  const [elephants, setElephants] = useState(elephantList);

  useEffect(() => {
    const startTime = new Date().getTime();

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= 360000) {
        onHourReduce();

        clearInterval(intervalId);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [elephants]);

  const onHourReduce = () => {
    const updatedReductionElephants = elephants.map((elephant) => {
      const generatedRandomNumber = Math.floor(Math.random() * 20) + 1; // Generate random number between 0 and 20
      const percentage = (generatedRandomNumber / 100) * elephant.health;
      const currentHealthStatus = elephant.health - percentage; // Ensure health doesn't go below 0

      const updatedStatus =
        currentHealthStatus < 70 ? (
          <p style={{ color: 'orange' }}>Can't walk</p>
        ) : (
          'Alive and can walk'
        );

      const updatedImage =
        currentHealthStatus < 70 ? elephantCantWalk : smilingElephant;

      return {
        ...elephant,
        health: currentHealthStatus,
        status: updatedStatus,
        image: updatedImage,
      };
    });

    setElephants(updatedReductionElephants);
    if (elephants.health) {
    }
  };

  useElapsedOneHour(elephants, onHourReduce);

  const onFeedAnimal = () => {
    const feedUpdate = elephants.map((elephant) => {
      const feedGeneratedRandomNumber =
        Math.floor(Math.random() * (25 - 10) + 1) + 10;
      const feedPercentage =
        (feedGeneratedRandomNumber / 100) * elephant.health;
      const increasedHealthStatus = elephant.health + feedPercentage;
      const healthCappedAt100 =
        increasedHealthStatus > 100 ? 100 : increasedHealthStatus;
      const updatedStatus =
        increasedHealthStatus < 70 ? (
          <p style={{ color: 'orange' }}>Can't walk</p>
        ) : (
          'Alive and can walk'
        );

      const updatedImage =
        increasedHealthStatus < 70 ? elephantCantWalk : smilingElephant;

      return {
        ...elephant,
        health: healthCappedAt100,
        status: updatedStatus,
        image: updatedImage,
      };
    });
    setElephants(feedUpdate);
  };

  return (
    <div className={classes.container}>
      <ul>
        {elephants.map((elephantCharacteristics) => (
          <div className={classes.topSection} key={elephantCharacteristics.id}>
            <h2>{elephantCharacteristics.name}</h2>
            <img
              src={elephantCharacteristics.image}
              width="95%"
              height="100%"
              alt=""
            />
            <h3>Health Status: {elephantCharacteristics.health.toFixed(0)}%</h3>
            <h4>Active Status: {elephantCharacteristics.status}</h4>
          </div>
        ))}
      </ul>

      <div className={classes.buttonSection}>
        <button className={classes.feed} onClick={onFeedAnimal}>
          Feed
        </button>
        <button className={classes.toggleHour} onClick={onHourReduce}>
          After an hour
        </button>
      </div>
      <div className={classes.timerSection}>
        <h4 className={classes.timeDisplay}>
          Current zoo time: {useZooTime().toLocaleTimeString()}
        </h4>
      </div>
    </div>
  );
};

export default Elephant;
