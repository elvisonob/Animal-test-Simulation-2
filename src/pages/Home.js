import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.body}>
      <div className={classes.homepage}>
        <div className={classes.subhomepage}>
          <h4>
            Welcome to the British Zoo simulation application where you can view
            our selected animal's health; reduce their health status, and also
            feed and increase their health status.
            <br />
            <br />
            Thank you and enjoy the simulation.
          </h4>
          <nav>
            <ul>
              <Link to="/monkey" className={classes.Link}>
                <li>Monkey</li>
              </Link>
              <Link to="/giraffe" className={classes.Link}>
                <li>Giraffe</li>
              </Link>
              <Link to="/elephant" className={classes.Link}>
                <li>Elephant</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
