import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis12() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis13");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis13");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">12| Eu prefiro andar de que?</span>
        <button className="opitions" onClick={handleOptionClick}>
          os dois
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          carro
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          moto
        </button>
      </div>
    </div>
  );
}

export default Quis12;
