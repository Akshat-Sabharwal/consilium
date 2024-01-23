import "./App.css";
import refresh from "./assets/images/refresh.png";
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
      <span className="light-circle"></span>
      <span className="dark-circle"></span>
      <div className="complete flex">
        <article className="advice flex" onClick={getAdvice}>
          {advice.id === 0 ? null : (
            <>
              <h1 className="heading">Advice #{advice.id}</h1>
              <hr className="separator" />
            </>
          )}
          <p className="statement">
            {advice.statement === ""
              ? "Click to generate an advice"
              : advice.statement}
          </p>
        </article>
        <span className="refresh flex">
          <img src={refresh} />
        </span>
      </div>
    </>
  );
};
