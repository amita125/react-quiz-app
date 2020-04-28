import React from "react";

function Instruction() {
  return (
    <div className="instruction">
      <h1>Quiz Intructions</h1>
      <br />
      <p>
        The quizzes consists of questions carefully designed to help you
        self-assess your comprehension of the information presented on the
        topics covered in the module. No data will be collected on the website
        regarding your responses or how many times you take the quiz. <br />{" "}
        Each question in the quiz is of multiple-choice or "true or false"
        format. Read each question carefully, and click on the button next to
        your response that is based on the information covered on the topic in
        the module. Each correct or incorrect response will result in
        appropriate feedback immediately at the bottom of the screen.
        <br /> After responding to a question, click on the "Next Question"
        button at the bottom to go to the next questino. After responding to the
        8th question, click on "Close" on the top of the window to exit the
        quiz. <br /> If you retake the quiz, the questions and their respective
        responses will be randomized. <br />
        The total score for the quiz is based on your responses to all
        questions. If you respond incorrectly to a question or retake a question
        again and get the correct response, your quiz score will reflect it
        appropriately. However, your quiz will not be graded, if you skip a
        question or exit before responding to all the questions.
      </p>
    </div>
  );
}

export default Instruction;
