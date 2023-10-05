import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";

import "./quis-styled.css";

function End() {
  const { contador } = useContext(StoreContext);
  const navigate = useNavigate();

  let resultado = ""; // Variável para armazenar o resultado

  if (contador < 12) {
    resultado = "Você precisa me conhecer um pouco mais em :(";
  } else if (contador >= 12 && contador <= 15) {
    resultado = "Já me conhece bem, mas pode melhorar.";
  } else if (contador > 15 && contador < 20) {
    resultado = "Já me conhece muito bem, estou super feliz :)";
  } else if (contador === 20) {
    resultado = "Estou muito feliz que você conhece tudo sobre mim :)";
  }

  return (
    <div className="container">
      <div className="content">
        <span className="question">{resultado}</span>
        <span className="results"> acertos:{contador} </span>
        <button onClick={() => navigate("/")} className="opitions">
          Recomeçar
        </button>
      </div>
    </div>
  );
}

export default End;
