import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={classes.list}>
            <NavLink
              to="/monkey"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Monkey
            </NavLink>
            <NavLink
              to="/giraffe"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Giraffe
            </NavLink>
            <NavLink
              to="/elephant"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Elephant
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
