import React, { useState, useEffect } from 'react';
import classes from './../index.module.css';
import smilingMonkey from './../components/Images/Smiling monkey.png';
import deadMonkeyPicture from './../components/Images/Dead monkey.jpg';
import { useZooTime } from './../hooks/useZooTime';
import { useElapsedOneHour } from './../hooks/useElapsedOneHour';
const monkeyList = [
  {
    id: 'm1',
    name: 'Monkey-1',
    image: smilingMonkey,
    health: 100,
    status: 'Alive',
  },

  {
    id: 'm2',
    name: 'Monkey-2',
    image: smilingMonkey,
    health: 100,
    status: 'Alive',
  },

  {
    id: 'm3',
    name: 'Monkey-3',
    image: smilingMonkey,
    health: 100,
    status: 'Alive',
  },

  {
    id: 'm4',
    name: 'Monkey-4',
    image: smilingMonkey,
    health: 100,
    status: 'Alive',
  },
  {
    id: 'm5',
    name: 'Monkey-5',
    image: smilingMonkey,
    health: 100,
    status: 'Alive',
  },
];

const Monkey = () => {
  const [monkeys, setMonkeys] = useState(monkeyList);

  const onHourReduce = () => {
    const updatedReductionMonkeys = monkeys.map((monkey) => {
      const generatedRandomNumber = Math.floor(Math.random() * 20) + 1; // Generate random number between 0 and 20
      const percentage = (generatedRandomNumber / 100) * monkey.health;
      const currentHealthStatus = monkey.health - percentage; // Ensure health doesn't go below 0

      const updatedStatus =
        currentHealthStatus < 29 ? (
          <p style={{ color: 'red' }}>Dead</p>
        ) : (
          'Alive'
        );

      const updatedImage =
        currentHealthStatus < 29 ? deadMonkeyPicture : smilingMonkey;

      return {
        ...monkey,
        health: currentHealthStatus,
        status: updatedStatus,
        image: updatedImage,
      };
    });

    setMonkeys(updatedReductionMonkeys);
  };

  useElapsedOneHour(monkeys, onHourReduce);

  const onFeedAnimal = () => {
    const feedUpdate = monkeys.map((monkey) => {
      const feedGeneratedRandomNumber =
        Math.floor(Math.random() * (25 - 10) + 1) + 10;
      const feedPercentage = (feedGeneratedRandomNumber / 100) * monkey.health;
      const increasedHealthStatus = monkey.health + feedPercentage;
      const healthCappedAt100 =
        increasedHealthStatus > 100 ? 100 : increasedHealthStatus;
      const updatedStatus =
        increasedHealthStatus < 29 ? (
          <p style={{ color: 'red' }}>Dead</p>
        ) : (
          'Alive'
        );

      const updatedImage =
        increasedHealthStatus < 29 ? deadMonkeyPicture : smilingMonkey;

      return {
        ...monkey,
        health: healthCappedAt100,
        status: updatedStatus,
        image: updatedImage,
      };
    });
    setMonkeys(feedUpdate);
  };

  return (
    <div className={classes.container}>
      <ul>
        {monkeys.map((monkeyCharacteristics) => (
          <div className={classes.topSection} key={monkeyCharacteristics.id}>
            <h2>{monkeyCharacteristics.name}</h2>
            <img
              src={monkeyCharacteristics.image}
              width="100%"
              height="100%"
              alt=""
            />
            <h3>Health Status: {monkeyCharacteristics.health.toFixed(0)}%</h3>
            <h4>Active Status: {monkeyCharacteristics.status}</h4>
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

export default Monkey;
