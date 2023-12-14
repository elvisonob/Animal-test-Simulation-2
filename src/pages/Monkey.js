import classes from './Monkey.module.css';
const MonkeyList = [
  {
    id: 'm1',
    name: 'Monkey-1',
    image: 'image-coming-soon',
    health: 100,
  },

  {
    id: 'm2',
    name: 'Monkey-2',
    image: 'image-coming-soon',
    health: 100,
  },

  {
    id: 'm3',
    name: 'Monkey-3',
    image: 'image-coming-soon',
    health: 100,
  },

  {
    id: 'm4',
    name: 'Monkey-4',
    image: 'image-coming-soon',
    health: 100,
  },
  {
    id: 'm5',
    name: 'Monkey-5',
    image: 'image-coming-soon',
    health: 100,
  },
];

const Monkey = () => {
  return (
    <div className={classes.topSection}>
      {MonkeyList.map((monkeyCharacteristics) => (
        <div>
          <h1>{monkeyCharacteristics.name}</h1>
          <p>{monkeyCharacteristics.image}</p>
          <h4>{monkeyCharacteristics.health}%</h4>
        </div>
      ))}
    </div>
  );
};

export default Monkey;
