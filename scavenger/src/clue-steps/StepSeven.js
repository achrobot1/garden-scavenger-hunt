import { useState } from 'react';
import clue_7 from '../images/clue_7.png'

export default function StepSeven() {

  const [inputText, setInputText] = useState('')
  const [resultText, setResultText] = useState('')

  const handleButtonClick = (e) => {
    if (inputText === 'czarna porzeczka') {
      console.log('you win!')
    } else {
      setResultText(':(')
    }
  }

  return (
    <div>
      <img src={clue_7} style={{'width': '100vw'}} />

      <input type='text' value={inputText} onChange={e => 
      {
        setResultText('')
        setInputText(e.target.value)
      }
        } /> 
      <button type='submit' onClick={handleButtonClick}>Submit</button>

      <p>{resultText}</p>
    </div>
  );
}