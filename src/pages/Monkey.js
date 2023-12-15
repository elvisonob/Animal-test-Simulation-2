import React, { useState } from 'react';
import classes from './Monkey.module.css';
const MonkeyList = [
  {
    id: 'm1',
    name: 'Monkey-1',
    image: 'image-coming-soon',
    health: 100,
    status: 'Alive',
  },

  {
    id: 'm2',
    name: 'Monkey-2',
    image: 'image-coming-soon',
    health: 100,
    status: 'Alive',
  },

  {
    id: 'm3',
    name: 'Monkey-3',
    image: 'image-coming-soon',
    health: 100,
    status: 'Alive',
  },

  {
    id: 'm4',
    name: 'Monkey-4',
    image: 'image-coming-soon',
    health: 100,
    status: 'Alive',
  },
  {
    id: 'm5',
    name: 'Monkey-5',
    image: 'image-coming-soon',
    health: 100,
    status: 'Alive',
  },
];

const Monkey = () => {
  const [monkeys, setMonkeys] = useState(MonkeyList);

  const updateHealth = () => {
    const updatedMonkeys = monkeys.map((monkey) => {
      const generatedRandomNumber = Math.floor(Math.random() * 20) + 1; // Generate random number between 0 and 20
      const percentage = (generatedRandomNumber / 100) * monkey.health;
      const currentHealthStatus = monkey.health - percentage; // Ensure health doesn't go below 0

      const updatedStatus =
        currentHealthStatus < 30 ? (
          <p style={{ color: 'red' }}>Dead</p>
        ) : (
          'Alive'
        );

      return { ...monkey, health: currentHealthStatus, status: updatedStatus };
    });

    setMonkeys(updatedMonkeys);
  };

  return (
    <div className={classes.container}>
      <ul>
        {monkeys.map((monkeyCharacteristics) => (
          <div className={classes.topSection} key={monkeyCharacteristics.id}>
            <h2>{monkeyCharacteristics.name}</h2>
            <p>{monkeyCharacteristics.image}</p>
            <h3>Health Status: {monkeyCharacteristics.health.toFixed(0)}%</h3>
            <h4>Active Status: {monkeyCharacteristics.status}</h4>
          </div>
        ))}
      </ul>

      <div className={classes.buttonSection}>
        <button className={classes.Feed}>Feed</button>
        <button className={classes.toggleHour} onClick={updateHealth}>
          After an hour
        </button>
      </div>
    </div>
  );
};

export default Monkey;
