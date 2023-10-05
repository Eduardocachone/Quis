import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis2() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis3");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis3");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">2| Qual a minha comida favorita?</span>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          pizzas
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          hanburguer
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          macarão
        </button>
      </div>
    </div>
  );
}

export default Quis2;
