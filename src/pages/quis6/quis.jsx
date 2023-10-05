import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis6() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis7");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis7");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">6| Qual o meu doce favorito?</span>
        <button className="opitions" onClick={handleOptionClick}>
          doce de leite
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          goiabada
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          chocolate
        </button>
      </div>
    </div>
  );
}

export default Quis6;
