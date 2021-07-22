import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <NavLinks />
    </nav>
  );
};

export default Nav;
