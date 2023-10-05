import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";


function Quis20() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/end");

  };
  const handleOptionClickCorrect = () => {
    navigate("/end");
    incrementarContador()

  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">20| Qual comida eu odeio do fundo do meu coração? </span>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          feijão
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          salada
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          tudo 
        </button>
      </div>
    </div>
  );
}

export default Quis20;
