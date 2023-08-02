// CSS
import './App.css';

// hooks
import { useCallback, useEffect, useState } from 'react';

// data
import { wordsList } from './data/words.js'

// interfaces


// components
import StarScreen from './components/StarScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

const guessedQty = 3

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessedQty)
  const [score, setScore] = useState(0)


  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor (Math.random() * Object.keys(categories).length)]
    
    console.log(category)

    // pick a random word
    const word = words[category][Math.floor (Math.random() * words[category].length)]

    console.log(word)

    return {word, category}
  }, [words])


  // starts the secret word game
  const startGame = useCallback(() => {
    //clear all letters
    clearLettersStates();


    // pick word and pick category
    const {word, category} = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) => l.toLowerCase())


    console.log(word, category)
    console.log(wordLetters)


    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    
    setGameStage(stages[1].name)
  },[pickWordAndCategory])

  // process the letter input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    // check if letter has already been utilized
    if(
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
      ) {
        return;
      }

      // push guessed letter or remove a guess
      if (letters.includes(normalizedLetter)) {
        setGuessedLetters((actualGuessdLetters) => [
          ...actualGuessdLetters, 
          letter,
        ])
      } else {
        setWrongLetters((actualWrongLetters) => [
          ...actualWrongLetters, 
          normalizedLetter,
        ])

        setGuesses ((actualGuesses) => actualGuesses - 1)

      }
  }

   // restarts the game
   const retry = () => {
    setScore(0);
    setGuesses(guessedQty);
    setGameStage(stages[0].name)
  }

  // clear letters state
  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }


  // check if guesses ended
  useEffect(() => {

    if (guesses === 0) {
      // game over and reset all states
      clearLettersStates()
      
      setGameStage(stages[2].name)
    }

  }, [guesses]);


  //check win condition
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    //win condition
    if(guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100))

      //restart game with new word
      startGame()
    }

  }, [guessedLetters, letters, startGame])


  return (
    <div className="App">
      {gameStage === 'start' && <StarScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
