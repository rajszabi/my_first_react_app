import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age;
  
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}.
      </p>
    </div>
  )
}


const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, title }) => <button onClick={handleClick}>{title}</button>



// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => {setCounter(counter + 1)}
//   const decreaseByOne = () => {setCounter(counter - 1)}
//   const setToOne = () => {setCounter(0)}


//   return (
//     <div>
//       <Display counter={counter} />
//       <Button handleClick={increaseByOne} title='PLUS' />
//       <Button handleClick={decreaseByOne} title='SUB' />
//       <Button handleClick={setToOne} title='ZERO' />
//     </div>
//   )
// }


const History = ({ allClicks }) => {
  if (allClicks.length == 0)
  return (
    <div>
      <p>The app is used with the left and right buttons.</p>
    </div>
  )

  return(
    <div>
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

const App = () => {
  const [ clicks, setClicks ] = useState({
    left : 0,
    right :0
  })
  const [ allClicks, setAll ] = useState([])

  const handleLeftClick = () => {
    setClicks({...clicks, left : clicks.left + 1})
    setAll(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    setClicks({...clicks, right : clicks.right + 1})
    setAll(allClicks.concat('R'))
  }


  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} title={'Left'}/>
      <Button handleClick={handleRightClick} title={'Right'}/>
      {clicks.right}
      <div>
        <Button handleClick={() => {setAll([])
           setClicks({left : 0, right : 0})}} title='Reset'/>
      </div>            
      <History allClicks={allClicks} />
    </div>
  )
}



let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter} />, 
  document.getElementById('root'))
}


setInterval(() => {
  refresh()
  counter +=1
}, 1000)