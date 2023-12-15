import React, { useState, useEffect } from 'react';
import classes from './../index.module.css';
import smilingGiraffe from './../components/Images/smiling Giraffe.jpg';
import { useElapsedOneHour } from './../hooks/useElapsedOneHour';
import { useZooTime } from './../hooks/useZooTime';
import deadGiraffe from './../components/Images/dead giraffe.jpg';
const giraffeList = [
  {
    id: 'g1',
    name: 'Giraffe-1',
    image: smilingGiraffe,
    health: 100,
    status: 'Alive',
  },

  {
    id: 'g2',
    name: 'Giraffe-2',
    image: smilingGiraffe,
    health: 100,
    status: 'Alive',
  },

  {
    id: 'g3',
    name: 'Giraffe-3',
    image: smilingGiraffe,
    health: 100,
    status: 'Alive',
  },

  {
    id: 'g4',
    name: 'Giraffe-4',
    image: smilingGiraffe,
    health: 100,
    status: 'Alive',
  },
  {
    id: 'g5',
    name: 'Giraffe-5',
    image: smilingGiraffe,
    health: 100,
    status: 'Alive',
  },
];

const Giraffe = () => {
  const [giraffes, setGiraffes] = useState(giraffeList);

  const onHourReduce = () => {
    const updatedReductionGiraffes = giraffes.map((giraffe) => {
      const generatedRandomNumber = Math.floor(Math.random() * 20) + 1; // Generate random number between 0 and 20
      const percentage = (generatedRandomNumber / 100) * giraffe.health;
      const currentHealthStatus = giraffe.health - percentage; // Ensure health doesn't go below 0

      const updatedStatus =
        currentHealthStatus < 49 ? (
          <p style={{ color: 'red' }}>Dead</p>
        ) : (
          'Alive'
        );

      const updatedImage =
        currentHealthStatus < 49 ? deadGiraffe : smilingGiraffe;

      return {
        ...giraffe,
        health: currentHealthStatus,
        status: updatedStatus,
        image: updatedImage,
      };
    });

    setGiraffes(updatedReductionGiraffes);
  };

  useElapsedOneHour(giraffes, onHourReduce);

  const onFeedAnimal = () => {
    const feedUpdate = giraffes.map((giraffe) => {
      const feedGeneratedRandomNumber =
        Math.floor(Math.random() * (25 - 10) + 1) + 10;
      const feedPercentage = (feedGeneratedRandomNumber / 100) * giraffe.health;
      const increasedHealthStatus = giraffe.health + feedPercentage;
      const healthCappedAt100 =
        increasedHealthStatus > 100 ? 100 : increasedHealthStatus;
      const updatedStatus =
        increasedHealthStatus < 49 ? (
          <p style={{ color: 'red' }}>Dead</p>
        ) : (
          'Alive'
        );

      const updatedImage =
        increasedHealthStatus < 49 ? deadGiraffe : smilingGiraffe;

      return {
        ...giraffe,
        health: healthCappedAt100,
        status: updatedStatus,
        image: updatedImage,
      };
    });
    setGiraffes(feedUpdate);
  };

  return (
    <div className={classes.container}>
      <ul>
        {giraffes.map((giraffeCharacteristics) => (
          <div className={classes.topSection} key={giraffeCharacteristics.id}>
            <h2>{giraffeCharacteristics.name}</h2>
            <img
              src={giraffeCharacteristics.image}
              width="100%"
              height="100%"
              alt=""
            />
            <h3>Health Status: {giraffeCharacteristics.health.toFixed(0)}%</h3>
            <h4>Active Status: {giraffeCharacteristics.status}</h4>
          </div>
        ))}
      </ul>

      <div className={classes.buttonSection}>
        <button className={classes.Feed} onClick={onFeedAnimal}>
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

export default Giraffe;
