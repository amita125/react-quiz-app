import React from "react";

function Instruction() {
  return (
    <div className="instruction">
      <h1>
        How To Play ??{" "}
        <span role="img" aria-label="game">
          🎮🎮🎮👇
        </span>
      </h1>
      <br />
      <p>
        The quizzes consists of questions carefully designed to help you
        self-assess your comprehension of the information presented on the
        different topics covered.
        <br />
        Each question in the quiz is of multiple-choice format <br />
        <br />
        <span role="img" aria-label="steps">
          &#128227;
        </span>
        &nbsp;Steps To follow :Choose <br />
        Number of Player
        <span role="img" aria-label="number">
          🔢
        </span>
        <br />
        Category
        <span role="img" aria-label="level">
          &#128203;
        </span>
        <br />
        Difficulty Level
        <span role="img" aria-label="Difficult">
          💣
        </span>
        <br />
        <span role="img" aria-label="wrong">
          ❌
        </span>
        Wrong Answer you get no Score <br />
        <span role="img" aria-label="right">
          ✔
        </span>
        ✔ Correct Answer you get a point <br />
      </p>
      <h1>
        <span role="img" aria-label="Trophy">
          🗣 Good Luck 🍀
        </span>
      </h1>
    </div>
  );
}

export default Instruction;
