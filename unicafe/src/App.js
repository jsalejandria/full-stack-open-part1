import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  const sum = props.states.good + props.states.neutral + props.states.bad;
  const average = (props.states.good + props.states.bad * -1) / sum;
  const fixedAverage = Math.round(average * 100) / 100;
  const positive = props.states.good / sum;
  const fixedPositive = Math.round(((positive * 1000) / 1000) * 100) + "%";

  if (sum === 0) {
    return <p>No feedback given</p>;
  } else
    return (
      <div>
        <table>
          <thead></thead>
          <StatisticLine text="good" value={props.states.good} />
          <StatisticLine text="neutral" value={props.states.neutral} />
          <StatisticLine text="bad" value={props.states.bad} />
          <StatisticLine text="all" value={sum} />
          <StatisticLine text="average" value={fixedAverage} />
          <StatisticLine text="positive" value={fixedPositive} />
        </table>
      </div>
    );
};

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    console.log("good is", good);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    console.log("neutral is", neutral);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    console.log("bad is", bad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics states={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
