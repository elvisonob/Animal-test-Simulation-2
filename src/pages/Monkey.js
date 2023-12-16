import React, { useState } from 'react';
import classes from './../index.module.css';
import smilingMonkey from './../components/Images/Smiling monkey.png';
import deadMonkeyPicture from './../components/Images/Dead monkey.jpg';
import { useZooTime } from './../hooks/useZooTime';
import { onHourReduce } from './../UIElement/functionsUtils';
import { useElapsedOneHour } from './../hooks/useElapsedOneHour';
import { onFeedAnimal } from './../UIElement/functionsUtils';
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

  const handleHourReduce = () => {
    onHourReduce(monkeys, deadMonkeyPicture, smilingMonkey, setMonkeys, 29);
  };

  const handleFeedAnimals = () => {
    onFeedAnimal(monkeys, deadMonkeyPicture, smilingMonkey, setMonkeys, 29);
  };

  useElapsedOneHour(monkeys, handleHourReduce);

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
            <h4>
              Active Status:{' '}
              <span style={{ color: 'green', fontSize: 'larger' }}>
                {monkeyCharacteristics.status}
              </span>
            </h4>
          </div>
        ))}
      </ul>

      <div className={classes.buttonSection}>
        <button className={classes.feed} onClick={handleFeedAnimals}>
          Feed
        </button>
        <button className={classes.toggleHour} onClick={handleHourReduce}>
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
