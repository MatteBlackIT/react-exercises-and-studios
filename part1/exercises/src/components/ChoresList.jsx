import React from "react";
import classes from "./ChoresList.module.css";

class ChoresList extends React.Component {
  render() {
    const chores = [
      "Laundry",
      "Clean Apt",
      "Pick her up form work",
      "Cook her dinner",
      "tuck her in",
    ];
    return (
      <div className={classes.borderPatrol}>
        <h3 className={classes.choresHeading}>Chorz</h3>
        <ul>
          <li className={classes.choresText}>{chores[0]}</li>
          <li className={classes.choresText}>{chores[1]}</li>
          <li className={classes.choresText}>{chores[2]}</li>
          <li className={classes.choresText}>{chores[3]}</li>
          <li className={classes.choresText}>{chores[4]}</li>
        </ul>
      </div>
    );
  }
}

export default ChoresList;
