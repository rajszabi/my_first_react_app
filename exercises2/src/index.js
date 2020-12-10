import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const ShowStat = ({ text, count }) => <p>{text} {count}</p>

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
      <Display title='statistics' />
      <ShowStat text='good' count={good} />
      <ShowStat text='neutral' count={neutral} />
      <ShowStat text='bad' count={bad} />
      <ShowStat text='all' count={good + neutral + bad} />
      <ShowStat text='avarage' count={Math.abs(good - bad)/(good + neutral + bad)} />
      <p>positive {good/(good+neutral+bad)}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)