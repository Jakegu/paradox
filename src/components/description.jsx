import "./description.css";

function Description() {
  return (
    <div className="description">
      <details>
        <summary>
          <h5>Learn about the game</h5>
        </summary>
        <p>Below is an interactive representation of the Monty Hall problem.</p>
        <p>
          The problem originates from a game show called let's make a deal and
          is named after the original host, Monty Hall
        </p>
        <p>
          The premise of the game is that there are three doors two of which
          have a goat hiding behind them and behind the other a brand new car.
        </p>
        <p>The contestant is asked to choose a door at their discretion.</p>
        <p>
          After a door is picked the host goes over to one of the other doors
          and opens it revealing a goat.
        </p>
        <p>
          After the goat is revealed, the contestant is asked whether or not
          they would like to switch doors to the other remaining closed door.
        </p>
        <p>
          Most people's intuition tells us that it doesn't matter whether or not
          we switch at that the odds are 50% either way.
        </p>
        <p>
          Go ahead and experiment for yourself if you are more likely to win by
          switching or staying with your original choice.
        </p>
      </details>
    </div>
  );
}

export default Description;
