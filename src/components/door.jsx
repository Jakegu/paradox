import { useState } from "react";
import "./door.css";

function Door(props) {
  const state1 = "door.png";
  const state2 = "goat.png";
  const state3 = "car.png";

  function getImage() {
    if (!props.open) {
      return state1;
    } else if (props.behind == "goat") {
      return state2;
    } else {
      return state3;
    }
  }

  function doorClicked() {
    props.onClick();
  }

  function getClasses() {
    let cl = "door ";
    if (props.chosen) {
      cl += "door-chosen";
    }

    return cl;
  }

  return (
    <div onClick={doorClicked} className={getClasses()}>
      <img src={"/images/" + getImage()} alt="" />
    </div>
  );
}

export default Door;
