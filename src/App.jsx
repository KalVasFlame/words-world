import { useEffect, useState, useCallback } from "react";

import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";
import Hangman from "./components/Hangman/Hangman";
import Word from "./components/Word/Word";
import Footer from "./components/Footer/Footer";

import wordList from "./wordList/wordList";

import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((prev) => [...prev, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWord(randomWord);
  }, []);

  useEffect(() => {
    setIncorrectLetters(
      guessedLetters.filter((letter) => !word.includes(letter))
    );
  }, [guessedLetters, word]);

  useEffect(() => {
    const handleKeypress = (e) => {
      const key = e.key;
      if (isLoser || isWinner) return;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key.toLowerCase());
    };

    document.addEventListener("keypress", handleKeypress);

    return () => {
      document.removeEventListener("keypress", handleKeypress);
    };
  }, [guessedLetters, addGuessedLetter, isLoser, isWinner]);

  return (
    <>
      <Header isWinner={isWinner} isLoser={isLoser} />
      <div className="container">
        <Hangman numberOfGuesses={incorrectLetters.length} />
        <Word
          word={word}
          guessedLetters={guessedLetters}
          isLoser={isLoser}
          isWinner={isWinner}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            activeLetters={guessedLetters}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
            isFinished={isWinner || isLoser}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
