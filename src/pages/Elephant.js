import React, { useState } from 'react';
import classes from './../index.module.css';
import smilingElephant from './../components/Images/smiling elephant.jpg';
import elephantCantWalk from './../components/Images/elephant cant walk.jpg';
import { onHourReduceElephant } from './../UIElement/functionsUtils';
import { onFeedAnimalElephant } from './../UIElement/functionsUtils';
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
  const [hasCantWalkStatus, setHasCantWalkStatus] = useState(false);

  const handleHourReduceElephant = () => {
    onHourReduceElephant(
      elephants,
      hasCantWalkStatus,
      setHasCantWalkStatus,
      elephantCantWalk,
      smilingElephant,
      setElephants
    );
  };

  useElapsedOneHour(elephants, handleHourReduceElephant);

  const handleFeedAnimals = () => {
    onFeedAnimalElephant(
      elephants,
      elephantCantWalk,
      smilingElephant,
      setElephants,
      69
    );
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
            <h4>
              Active Status:{' '}
              <span style={{ color: 'green', fontSize: 'large' }}>
                {elephantCharacteristics.status}
              </span>
            </h4>
          </div>
        ))}
      </ul>

      <div className={classes.buttonSection}>
        <button className={classes.feed} onClick={handleFeedAnimals}>
          Feed
        </button>
        <button
          className={classes.toggleHour}
          onClick={handleHourReduceElephant}
        >
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
