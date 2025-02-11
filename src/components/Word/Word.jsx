import s from "./Word.module.css";

const Word = ({ word, guessedLetters, isLoser, isWinner }) => {
  console.log("word");
  console.log(word);

  return (
    <div className={s.word}>
      {word.split("").map((letter, index) => (
        <div
          className={s.letterBox}
          key={index}
          style={{
            borderBottom:
              !guessedLetters.includes(letter) || isLoser
                ? ".1em solid red"
                : ".1em solid green",
          }}
        >
            <span
              style={{
                color: "#000",
                visibility:
                  guessedLetters.includes(letter) || isLoser || isWinner
                    ? "visible"
                    : "hidden",
              }}
            >
              {letter}
            </span>
        </div>
      ))}
    </div>
  );
};

export default Word;
