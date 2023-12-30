import { useEffect, useState } from "react";
import "./montyHall.css";
import Door from "../components/door";
import Win from "../components/win";
import Lose from "../components/lose";
import Description from "../components/description";

function MontyHall() {
  //A hack to reload the display everytime the reset button is clicked
  const [resetKey, setResetKey] = useState(0);
  //Sets an array for what is behind the doors
  const [options, setOptions] = useState([]);
  //Tell us if a door is open or closed
  const [doorStates, setDoorStates] = useState([]); // true = open
  //Shows if a door has been clicked on
  const [doorClicked, setDoorClicked] = useState(false);
  //Shows which door is currently chosen
  const [doorChosen, setDoorChosen] = useState([]);
  //The index of the currently chosen door
  const [chosenDoorIndex, setChosenDoorIndex] = useState(0);
  //Keeps track of if the game is won, lost or is still in progress
  const [gameState, setGameState] = useState(0); //0 = in progress, 1 = won, 2 = lost
  //Keeps Track of number of wins/loses
  const [numWon, setNumWon] = useState(0);
  const [numLost, setNumLost] = useState(0);

  // when component loads, call reset
  useEffect(resetGame, []);

  function selectRandomDoor() {
    return Math.floor(Math.random() * 3);
  }

  function resetGame() {
    setResetKey(resetKey + 1);

    // pick the car
    const opts = ["goat", "goat", "goat"];
    const carPlace = selectRandomDoor();
    opts[carPlace] = "car";

    setOptions(opts);
    setDoorStates([false, false, false]);
    setDoorChosen([false, false, false]);
    setDoorClicked(false);
    setChosenDoorIndex(0);
    setGameState(0);
  }

  function handleSelection(doorIndex) {
    if (doorClicked) {
      return;
    }
    setChosenDoorIndex(doorIndex);
    setDoorClicked(true);
    let copy = [...doorChosen];
    copy[doorIndex] = true;
    setDoorChosen(copy);

    // if door clicked, return
    const doorRevealIndex = selectRandomDoor();
    if (doorRevealIndex != doorIndex && options[doorRevealIndex] == "goat") {
      let copy = [...doorStates];
      copy[doorRevealIndex] = true;
      setDoorStates(copy);

      return 1;
      // set door clicked
    } else {
      handleSelection(doorIndex);
    }
    return 0;
  }

  function processSelection(index) {
    // close all doors, open the index

    let copy = [false, false, false];
    copy[index] = true;
    setDoorChosen(copy);
    // set door clicked to false

    // show a win message
    if (options[index] == "car") {
      console.log("win");
      let copy = [...doorStates];
      copy[index] = true;
      setDoorStates(copy);
      setGameState(1);
      setNumWon(numWon + 1);
      return 1;
    } else {
      console.log("lose");
      let copy = [...doorStates];
      copy[index] = true;
      setDoorStates(copy);
      setGameState(2);
      setNumLost(numLost + 1);
      return 0;
    }
  }

  function switchDoor() {
    for (let i = 0; i < options.length; i++) {
      if (!doorStates[i] && i != chosenDoorIndex) {
        processSelection(i);
        return 1;
      }
    }
  }

  return (
    <div className="montyHall page">
      <div key={resetKey}>
        <Description />
        <Door
          onClick={() => handleSelection(0)}
          behind={options[0]}
          open={doorStates[0]}
          chosen={doorChosen[0]}
        />
        <Door
          onClick={() => handleSelection(1)}
          behind={options[1]}
          open={doorStates[1]}
          chosen={doorChosen[1]}
        />
        <Door
          onClick={() => handleSelection(2)}
          behind={options[2]}
          open={doorStates[2]}
          chosen={doorChosen[2]}
        />
      </div>

      {doorClicked && gameState == 0 ? (
        <div className="query">
          <h3>Would you like to switch doors?</h3>
          <button onClick={switchDoor} className="button-71">
            Switch
          </button>
          <button
            onClick={() => processSelection(chosenDoorIndex)}
            className="button-71"
          >
            Stay
          </button>
        </div>
      ) : null}

      {gameState == 1 ? (
        <div>
          <Win />
        </div>
      ) : null}

      {gameState == 2 ? (
        <div>
          <Lose />
        </div>
      ) : null}

      <button onClick={resetGame} className="button-71">
        Reset
      </button>

      <div className="gameRecord">
        <h3>Number of games Won: {numWon}</h3>
        <h3>Number of games Lost: {numLost}</h3>
      </div>
    </div>
  );
}

export default MontyHall;
