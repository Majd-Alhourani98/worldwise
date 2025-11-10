import { NavLink } from "react-router-dom";
import styles from "./pageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>

      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
    </nav>
  );
}

export default PageNav;
