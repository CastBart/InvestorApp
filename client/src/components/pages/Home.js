import { Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Home.module.css"

export default function Home(props) {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <HashLink className={`${styles.link}`} smooth to="/financial-calculator">
        Financial Calculator
      </HashLink>
      <HashLink className={styles.link} smooth to="/property-tracker">
        Property Tracker
      </HashLink>
      <HashLink className={styles.link} smooth to="/calendar">
        Calendar
      </HashLink>
    </Fragment>
  );
}
