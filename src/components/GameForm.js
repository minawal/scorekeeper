import './GameForm.css'
import Button from './Button'
import Input from './Input'

export default function GameForm({ onCreateGame}) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input 
      name="nameOfGame" 
      labelText="Name of game: " 
      placeholder="e.g. Caracasonne" 
      />
      <Input 
      name="playerNames" 
      labelText="Player names: " 
      placeholder="e.g. John Doe" 
      />
      <Button
      text='Create Game' />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const {nameOfGame, playerNames} = form.elements
    onCreateGame({
      nameOfGame: nameOfGame.value, 
      playerNames: playerNames.value.split(',')
      .map(name => name.trim()),
    })
    form.reset()
    nameOfGame.focus()
    
  }
}