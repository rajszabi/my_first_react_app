import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0)
    return (<h3>No feedback given</h3>)
  
  return (
    <div>
      <Statistic text='good' count={good} />
      <Statistic text='neutral' count={neutral} />
      <Statistic text='bad' count={bad} />
      <Statistic text='all' count={good + neutral + bad} />
      <Statistic text='avarage' count={Math.abs(good - bad)/(good + neutral + bad)} />
      <Statistic text='positive' count={good/(good+neutral+bad) + '%'} />
    </div>
  )
  
}

const Statistic = ({ text, count}) => <p>{text} {count}</p>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display title='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text={'Good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'Bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)