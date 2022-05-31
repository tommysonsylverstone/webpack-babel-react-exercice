import React from "react";
import Student from "../Student/Student";
import Pgcd from "../Pgcd/Pgcd";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const students = [
    { nom: "Tenreiro", prenom: "Benjamin", age: 30 },
    { nom: "Etoiles", prenom: "Streameur", age: 14 },
  ];
  return (
    <>
      <h1>Home</h1>
      <section className="student-section">
        <h2>Elèves :</h2>
        {students.map((student, i) => {
          return (
            <Student
              nom={student.nom}
              prenom={student.prenom}
              age={student.age}
              key={i}
            />
          );
        })}
      </section>
      <section className="pgcd-section">
        <h2>PGCD : </h2>
        <Pgcd x="60" y="36" />
      </section>
      <section className="quiz-section">
        <h2>Quiz : </h2>
        <Quiz />
      </section>
    </>
  );
};

export default Home;
