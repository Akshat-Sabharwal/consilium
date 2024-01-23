import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

export const App = () => {
  const [advice, setAdvice] = useState({ id: 0, statement: "" });

  const getAdvice = (e) => {
    e.preventDefault();
    fetch("https://api.adviceslip.com/advice")
      .then((data) => data.json())
      .then((advice) =>
        setAdvice({ id: advice.slip.id, statement: advice.slip.advice })
      );
  };

  return (
    <>
      <span className="blue-circle"></span>
      <span className="brown-circle"></span>
      <article className="advice">
        <h1 className="heading">Advice #{advice.id}</h1>
        <hr className="separator" />
        <p className="statement">{advice.statement}</p>
      </article>
    </>
  );
};
