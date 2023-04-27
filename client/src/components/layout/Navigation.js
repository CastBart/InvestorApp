import { HashLink } from "react-router-hash-link";
import styles from "./Navigation.module.css";

export default function Navigation(props) {
  return (
    <nav className={styles.navigation}>
      <ul>
        <HashLink className={styles.nav_link} smooth to="/financial-calculator">
          Financial Calculator
        </HashLink>
        <HashLink className={styles.nav_link} smooth to="/property-tracker">
          Property Tracker
        </HashLink>
        <HashLink className={styles.nav_link} smooth to="/calendar">
          Calendar
        </HashLink>
        <HashLink className={styles.nav_link} smooth to="/home">
          Home
        </HashLink>
      </ul>
    </nav>
  );
}
