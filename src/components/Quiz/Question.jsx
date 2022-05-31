import React, { useState } from "react";

const Question = ({ question, a, b, c, reponse, setScore }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "";
    if (value === reponse) {
        text = "Bravo !";
        setScore(o => (
            parseInt(o + 1)
        ));
    } else {
        text = `Dommage ! La bonne réponse était "${reponse}"`;
    }
    alert(text);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form className="question-form" onSubmit={(e) => handleSubmit(e)}>
        <ul>
          <li>{question}</li>
          <li>
            <input
              type="radio"
              value={a}
              name="asdf"
              checked={value === a}
              onChange={(e) => handleChange(e)}
            />{" "}
            {a}
            <input
              type="radio"
              value={b}
              name="asdf"
              checked={value === b}
              onChange={(e) => handleChange(e)}
            />{" "}
            {b}
            <input
              type="radio"
              value={c}
              name="asdf"
              checked={value === c}
              onChange={(e) => handleChange(e)}
            />{" "}
            {c}
          </li>
          <li>
            <input type="submit" value="Confirmer" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Question;
