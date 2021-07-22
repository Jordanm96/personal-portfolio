import MobileNavigation from './MobileNavigation';
import classes from './NavBar.module.css';
import Nav from './Nav';

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <MobileNavigation />
      <Nav />
    </div>
  );
};

export default NavBar;
