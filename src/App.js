import { useEffect, useState } from 'react';
import classnames from 'classnames';
import helpers from './helpers';
import Abecedary from './components/Abecedary';
import Drawing from './components/Drawing';
import Word from './components/Word';
import data from './data';

const App = () => {
  const [stages, setStages] = useState(0);
  const [letters, setLetters] = useState([]);
  const [abc, setAbc] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const searchLetter = (guess) => {
    const isInWord = letters.map((l) => l.value).includes(guess);

    if (isInWord) {
      const newLetters = letters.map((letter) => {
        if (letter.value === guess) letter.found = true;
        return letter;
      });

      setLetters(newLetters);

      const newAbc = abc.map((letter) => {
        if (letter.value === guess) letter.found = true;
        return letter;
      });

      setAbc(newAbc);

      return;
    }

    const newAbc = abc.map((letter) => {
      if (letter.value === guess) letter.used = true;
      return letter;
    });

    setAbc(newAbc);
    setStages(stages + 1);
  };

  const setupGame = () => {
    setGameOver(false);
    setStages(0);

    const newAbc = Array.from(Array(26).keys()).map((l) => (
      {
        value: String.fromCharCode(l + 65),
        used: false,
        found: false
      }
    ));

    setAbc(newAbc);

    const newWord = helpers.random(helpers.shuffle(data))[0];
    const newLetters = newWord.toUpperCase().split('').map((letter) => ({ found: false, value: letter }));

    setLetters(newLetters);
  };

  const restartGame = () => {
    setupGame();
  };

  useEffect(() => {
    if (stages === 11) setGameOver(true);
  }, [stages]);

  useEffect(() => {
    const hasWon = letters.length && letters.every((l) => l.found);
    if (hasWon) setGameOver(true);
  }, [letters]);

  useEffect(() => {
    setupGame();
  }, []);

  return (
    <div id="boardgame">
      <Drawing stages={stages} />

      { !!letters.length && <Word letters={letters} /> }

      <Abecedary letters={abc} searchLetter={searchLetter} gameOver={gameOver} />

      <button className={classnames('restart', { hidden: !gameOver })} onClick={restartGame}>
        ¡Jugar otra vez!
      </button>
    </div>
  );
};

export default App;
