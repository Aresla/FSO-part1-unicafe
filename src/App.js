import { useState } from 'react';
import './App.css';

const StatisticLine = ({text, value}) => {
  return(
    <div>{text} {value}</div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = good * 100 / all

  if (all === 0)
  {
    return (
      <div>
        <br></br>
        No feedback given
      </div>
    )
  }
  return (
  <div className='statistic'>    
    <h1>statistic</h1>
    <StatisticLine text="good:____" value ={good} />
    <StatisticLine text="neutral :__" value ={neutral} />
    <StatisticLine text="bad:_____" value ={bad} />
    <div>all:______ {all}</div>
    <div>average:__ {average}</div>
    <div>positive:__{positive} %</div> 
  </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give your feedback about Unicafe</h1>
      <div className="btns">
        <Button handleClick={() => setGood(good + 1)} text={"good"} />
        <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
        <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />    
    </div>
  )
}

export default App