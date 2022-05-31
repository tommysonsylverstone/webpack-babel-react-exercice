import React from "react";

const Student = ({ nom, prenom, age }) => {
  return (
    <div className="student">
      <ul>
        <li>Nom : {nom}</li>
        <li>Prénom : {prenom}</li>
        <li>Âge : {age}</li>
      </ul>
      {age < 15 && <div className="alert">Non autorisé.</div>}
    </div>
  );
};

export default Student;
