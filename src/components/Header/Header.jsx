import s from "./Header.module.css";

const Header = ({ isWinner, isLoser }) => (
  <div className={s.header}>
    <p className={s.headerText}>
      Select <span className="greenText bold">EN</span> language on your
      keyboard and start guessing!
    </p>
    {isWinner && (
      <p>
        You <span className="greenText bold">Win!!!</span> Refresh to play again
      </p>
    )}
    {isLoser && (
      <p>
        You <span className="redText bold">Lose!!!</span> Refresh to play again
      </p>
    )}
  </div>
);

export default Header;
