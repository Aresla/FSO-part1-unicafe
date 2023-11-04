import { useState } from 'react'

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
  <div>    
    <h1>statistic</h1>
    <StatisticLine text="good" value ={good} />
    <StatisticLine text="neutral" value ={neutral} />
    <StatisticLine text="bad" value ={bad} />
    <div>all {all}</div>
    <div>average {average}</div>
    <div>positive {positive} %</div> 
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
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />    
    </div>
  )
}

export default App