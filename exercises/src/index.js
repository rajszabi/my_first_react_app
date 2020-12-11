import React from 'react'
import ReactDOM from 'react-dom'


const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises} />)

const Part = (props) => <p>{props.part} {props.exercise}</p>

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => ({exercises : s.exercises + p.exercises}))
  return <p>Total of {total.exercises} exercises</p>
}




const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))