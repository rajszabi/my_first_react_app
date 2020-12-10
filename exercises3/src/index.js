import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const Display = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const MostVotes = ({ anecdotes, points }) => {
  var max = 0
  var i = 0

  for (const [index, value] of points.entries()) {
    console.log()
    if (value > max) {
      max = value
      i = index
    }
  }

  console.log(max, i)

  return (
    <div>
      <p>{anecdotes[i]}</p>
      <p>has {max} votes</p>
    </div>
  )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const handlePoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Display title='Anecdote of the day' />
      {props.anecdotes[selected]}
      <div>
        <p>has {points[selected]} votes</p>
      </div>
      <div>
        <Button handleClick={handlePoints} text='vote' />
        <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote' />
      </div>

      <Display title='Anecdote with most votes' />
      <MostVotes anecdotes={anecdotes} points={points} />

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)