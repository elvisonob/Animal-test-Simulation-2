import React, { useState, useEffect } from 'react';
import classes from './../index.module.css';
import smilingGiraffe from './../components/Images/smiling Giraffe.jpg';
import { useElapsedOneHour } from './../hooks/useElapsedOneHour';
import { onHourReduce } from './../UIElement/functionsUtils';
import { useZooTime } from './../hooks/useZooTime';
import deadGiraffe from './../components/Images/dead giraffe.jpg';
import { onFeedAnimal } from './../UIElement/functionsUtils';
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

  const handleHourReduce = () => {
    onHourReduce(giraffes, deadGiraffe, smilingGiraffe, setGiraffes, 49);
  };

  const handleFeedAnimals = () => {
    onFeedAnimal(giraffes, deadGiraffe, smilingGiraffe, setGiraffes, 49);
  };
  useElapsedOneHour(giraffes, onHourReduce);

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

export default Giraffe;
