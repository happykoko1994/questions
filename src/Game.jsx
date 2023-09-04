import { useState } from "react";
import Resault from "./Resault";

function Game({ title, answers }) {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const questions = [
    {
      title: "Кто по классу Джейс?",
      answers: ["Стрелок", "Душегуб", "Ассасин"],
      correct: 0
    },
    {
      title: "Предметы между игроками распределяются",
      answers: ["Случайно", "По очереди"],
      correct: 1
    },
    {
      title: "Сколько раундов идет игра?",
      answers: [
        "Один",
        "До последнего выжившего игрока",
        "До последнего чампиона"
      ],
      correct: 1
    },
    {
      title: "Понравился ли Вам опрос?",
      answers: ["Да", "Нет"],
      correct: 0
    }
  ];

  function newStep(index) {
    setStep(step + 1);
    console.log(step, index);
    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }
  }
  const persent = Math.round((step / questions.length) * 100);

  return step !== questions.length ? (
    <div className="container">
      <div className="game_wrapper">
        <div className="progress_line">
          <div className="progress" style={{ width: `${persent}%` }}></div>
          <h1 className="question">{questions[step].title}</h1>
          <ul className="list">
            {questions[step].answers.map((item, index) => (
              <li key={index} onClick={() => newStep(index)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <Resault correct={correct} length={questions.length} />
  );
}

export default Game;
