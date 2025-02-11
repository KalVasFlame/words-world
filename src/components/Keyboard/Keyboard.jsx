import keys from "./keys";

import s from "./Keyboard.module.css";

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  isFinished,
}) => {
  return (
    <div
      className={s.keyboard}
    >
      {keys.map((key) => {
        const isActive = activeLetters.includes(key.toLowerCase());
        const isInactive = inactiveLetters.includes(key.toLowerCase());
        return (
          <button
            disabled={isActive || isInactive || isFinished}
            onClick={() => addGuessedLetter(key.toLowerCase())}
            key={key}
            className={`${s.button} ${isActive ? s.active : ""} ${
              isInactive ? s.inactive : ""
            }`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
