import "./styles.css";
function Resault({ correct, length }) {
  return (
    <div className="container">
      <div className="result_wrapper">
        <h1>
          Поздравляем! <br />
          Вы ответили правильно на {correct} из {length}!
        </h1>
        <a href="/">
          <button>Пройти заново</button>
        </a>
      </div>
    </div>
  );
}
export default Resault;
