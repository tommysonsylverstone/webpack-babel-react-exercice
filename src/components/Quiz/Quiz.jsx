import React, { useState } from "react";
import Question from "./Question";
const Quiz = () => {
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Quelle est la capitale de la France ?",
      a: "Berlin",
      b: "Paris",
      c: "New York",
      reponse: "Paris",
    },
    {
      question: "Quelle est la hauteur du mont Blanc ?",
      a: "3548m",
      b: "8849m",
      c: "4809m",
      reponse: "4809m",
    },
    {
      question: "Quelle est la signification de SNCF ?",
      a: "Société nationale des chemins de fer",
      b: "Sans nos cocktails fuyards",
      c: "Sac non conforme aux français",
      reponse: "Société nationale des chemins de fer",
    },
  ];

  return (
    <div className="questions">
      Score : {score}
      {questions.map((q, i) => (
        <Question
          question={q.question}
          a={q.a}
          b={q.b}
          c={q.c}
          reponse={q.reponse}
          key={i}
          setScore={setScore}
        />
      ))}
    </div>
  );
};

export default Quiz;
