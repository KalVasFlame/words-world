import s from "./Hangman.module.css";

import {
  Head,
  Body,
  RightArm,
  LeftArm,
  RightLeg,
  LeftLeg,
} from "../BodyParts/BodyParts";

const Hangman = ({ numberOfGuesses }) => {
  const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
  return (
    <div style={{ position: "relative" }}>
      {bodyParts.slice(0, numberOfGuesses).map((BodyPart) => (
        <BodyPart key={BodyPart} />
      ))}
      <div className={s.smallPlank} />
      <div className={s.mediumPlank} />
      <div className={s.largePlank} />
      <div className={s.bottomPlank} />
    </div>
  );
};

export default Hangman;
