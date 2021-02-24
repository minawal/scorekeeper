// import { useState } from 'react'
import Player from './Player'
import Header from './Header'
import Button from './Button'
import HistoryEntry from './HistoryEntry'
import Navigation from './Navigation'
import GameForm from './GameForm'
import './App.css'

function App() {
  return (
    <div className="App">
       <GameForm
        onCreateGame={data => console.log('onCreateGame', data)}
      />
      <Navigation
        pages={['Play', 'History']}
        onNavigate={index => console.log(index)}
        activeIndex={0}
      />

      <Header text="Caracassonne" />
      <Player
        name="John Doe"
        score="10"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />
      <Player
        name="Jane Doe"
        score="20"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />
      <Button
        text="Reset scores"
        onClick={() => console.log('Reset scores')}
      ></Button>
      <Button
        text="Reset all"
        onClick={() => console.log('Reset all')}
      ></Button>
      <HistoryEntry
      nameOfGame="Carcassonne"
      players={[
        { name: 'John Doe', score: 10 },
        { name: 'Jane Doe', score: 20 },
      ]}
      />
    </div>
  )
}

export default App